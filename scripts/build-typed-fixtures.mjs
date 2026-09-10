import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/&hellip;/g, '...')
    .replace(/\s+/g, ' ')
    .trim();
}

console.log('Fetching live posts...');
const rawPosts = execSync('curl.exe -s --connect-timeout 15 "https://manatravel.cn/wp-json/wp/v2/posts?per_page=30"', { maxBuffer: 15 * 1024 * 1024 });
const posts = JSON.parse(rawPosts.toString('utf-8'));

// Filter actual tour packages (exclude reviews and general archives)
const excludedSlugs = ['guests-review', 'mana-travel-archives', 'mana-trip-archives', '__trashed'];
const tourPosts = posts.filter(p => !excludedSlugs.includes(p.slug) && p.title?.rendered);

console.log(`Processing ${tourPosts.length} tour posts...`);

const normalizedTours = tourPosts.map((p, index) => {
  const title = stripHtml(p.title?.rendered);
  const slug = p.slug === '2520-2' || p.slug === '8d7n-muslim-village-and-food-trip'
    ? '8d7n-muslim-village-and-food-trip'
    : (p.slug.match(/^\d+-\d+$/) ? `tour-${p.id}` : p.slug);

  // Extract gallery images from content if available
  const imgMatches = [...(p.content?.rendered || '').matchAll(/src="(https:\/\/manatravel\.cn\/wp-content\/uploads\/[^"]+)"/g)];
  const extractedImages = [...new Set(imgMatches.map(m => m[1]))];

  // Default images if none found
  const fallbackHero = extractedImages[0] || 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1600&q=80';
  const heroImage = extractedImages.find(img => img.includes('1024x') || !img.includes('300x')) || fallbackHero;

  // Extract days
  const isPrivate = title.toLowerCase().includes('private') || slug.includes('private');
  let durationDays = 8;
  let durationNights = 7;
  const dayMatch = title.match(/(\d+)d(\d+)n/i) || title.match(/(\d+)\s*day/i);
  if (dayMatch) {
    durationDays = parseInt(dayMatch[1], 10);
    durationNights = dayMatch[2] ? parseInt(dayMatch[2], 10) : durationDays - 1;
  }

  // Parse days from headings in content
  const daySections = (p.content?.rendered || '').split(/(?=<h[2-4][^>]*>Day\s*\d+)/i);
  let itinerary = [];

  if (daySections.length > 1) {
    itinerary = daySections.slice(1).map((section, dIdx) => {
      const dayNum = dIdx + 1;
      const titleMatch = section.match(/<h[2-4][^>]*>Day\s*\d+[:：]?\s*([^<]+)<\/h[2-4]>/i);
      const dayTitle = titleMatch ? titleMatch[1].trim() : `Day ${dayNum} Cultural Route`;

      const dayImages = [...section.matchAll(/src="(https:\/\/manatravel\.cn\/wp-content\/uploads\/[^"]+)"/g)]
        .map(m => m[1])
        .filter(url => !url.includes('300x300') && !url.includes('225x300') && !url.includes('245x300'));

      const plainContent = stripHtml(section);

      return {
        dayNumber: dayNum,
        title: dayTitle,
        routeOverview: plainContent.length > 160 ? plainContent.slice(0, 160) + '...' : plainContent,
        accommodation: dayTitle.toLowerCase().includes('yurt') ? 'Traditional Grassland Yurt / Heritage Lodge' : 'Handpicked 4-Star Muslim-Friendly Hotel',
        mealsIncluded: {
          breakfast: true,
          lunch: true,
          dinner: true,
          notes: '100% Halal local Hui & regional specialties'
        },
        highlights: [
          `Authentic Halal regional dining`,
          `Historic Islamic cultural heritage site`,
          `Community interaction with local Hui hosts`
        ],
        galleryImages: dayImages.slice(0, 3)
      };
    });
  }

  // If no detailed days extracted, build realistic days matching itinerary
  if (itinerary.length === 0) {
    for (let d = 1; d <= durationDays; d++) {
      itinerary.push({
        dayNumber: d,
        title: d === 1 ? 'Arrival & Welcome Dinner' : (d === durationDays ? 'Farewell & Departure' : `Cultural Exploration Day ${d}`),
        routeOverview: d === 1
          ? 'Airport pickup by brother Ma and transfer to hotel, followed by authentic welcome dinner with Yunnan Hui hospitality.'
          : (d === durationDays ? 'Morning bazaar visits for halal tea and heritage souvenirs, then airport transfer with farewell blessings.' : 'Scenic cultural exploration, visiting historic local masjids, artisan workshops, and local Hui Muslim households.'),
        accommodation: 'Handpicked 4-Star Muslim-Friendly Hotel',
        mealsIncluded: {
          breakfast: true,
          lunch: d > 1 && d < durationDays,
          dinner: true,
          notes: 'Strictly halal certified or Muslim-operated restaurants'
        },
        highlights: ['Verified local halal gastronomy', 'Historic prayer facilities', 'Direct host guidance'],
        galleryImages: extractedImages.slice((d - 1) * 2, d * 2)
      });
    }
  }

  // Batches for scheduled tours
  const batches = isPrivate ? [] : [
    {
      id: `b-${p.id}-1`,
      startDate: '2026-10-12',
      endDate: '2026-10-19',
      displayDates: 'Oct 12 - Oct 19, 2026',
      status: 'limited',
      availableSeats: 4
    },
    {
      id: `b-${p.id}-2`,
      startDate: '2026-11-08',
      endDate: '2026-11-15',
      displayDates: 'Nov 08 - Nov 15, 2026',
      status: 'open',
      availableSeats: 8
    },
    {
      id: `b-${p.id}-3`,
      startDate: '2026-12-20',
      endDate: '2026-12-27',
      displayDates: 'Dec 20 - Dec 27, 2026',
      status: 'open',
      availableSeats: 10
    }
  ];

  return {
    id: String(p.id),
    slug,
    title,
    subtitle: isPrivate
      ? 'Customizable private family expedition paced for multi-generational comfort'
      : 'Curated small-group cultural expedition with international Muslim travelers',
    tourType: isPrivate ? 'private' : 'scheduled',
    durationDays,
    durationNights,
    destinations: title.includes('–') || title.includes('-')
      ? title.split(/[–-]/).slice(1).map(s => s.replace(/\(.*?\)/g, '').trim()).filter(Boolean)
      : ['Kunming', 'Dali', 'Lijiang', 'Weishan'],
    heroImage,
    galleryImages: extractedImages.slice(0, 8),
    inclusions: [
      'All local ground transportation in private air-conditioned coach',
      'All accommodations in handpicked 4-star Muslim-friendly hotels or traditional lodges',
      '100% Halal breakfast, lunch, and dinner throughout the expedition',
      'Dedicated English/Chinese-speaking Muslim local host (brother Ma / team)',
      'All entrance fees to national parks, cultural heritage zones, and historic masjids',
      'High-speed domestic train tickets between expedition hubs'
    ],
    exclusions: [
      'International round-trip flights to/from China (self-arranged)',
      'China tourist visa fees (visa-free entry applies for certain passports)',
      'Personal expenses, laundry, and discretionary shopping souvenirs',
      'Personal travel insurance (mandatory prior to departure)'
    ],
    batches,
    itinerary,
    priceIndication: {
      amount: isPrivate ? 5800 : 4800,
      currency: 'CNY',
      note: isPrivate ? 'Per person (based on family party size of 4-6)' : 'Per person (twin sharing basis)'
    }
  };
});

const toursFileContent = `import type { TourPackage } from '@/types/tour';

export const TOURS_DATA: TourPackage[] = ${JSON.stringify(normalizedTours, null, 2)};

export function getTourBySlug(slug: string): TourPackage | undefined {
  return TOURS_DATA.find(t => t.slug === slug || t.id === slug);
}

export function getToursByType(type: 'scheduled' | 'private'): TourPackage[] {
  return TOURS_DATA.filter(t => t.tourType === type);
}
`;

fs.writeFileSync(path.resolve('src/data/tours.ts'), toursFileContent, 'utf-8');
console.log('Wrote src/data/tours.ts successfully.');
