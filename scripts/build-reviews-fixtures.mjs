import fs from 'node:fs';
import path from 'node:path';

const GUEST_STORIES = [
  {
    id: 'review-neenah',
    guestName: 'Neenah',
    originCountry: 'United States',
    countryCode: 'US',
    travelDate: 'Autumn 2024',
    partyComposition: 'Solo Traveler',
    quote: 'This trip was really nice and it was so interesting to see the local side and less traveled areas. Made infinitely better by great company.',
    fullNarrative: 'Exploring the Hui Muslim historic villages around Yunnan opened my eyes to centuries of authentic Islamic architecture and culture that you never see in mainstream travel brochures. Yusuf Ma and Viona took care of every single meal with 100% halal peace of mind, and the fellow travelers felt like family by day two.',
    featuredPhotoUrl: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80',
    tourReferenceSlug: '8d7n-muslim-village-and-food-trip',
    isHalalVerified: true,
    rating: 5
  },
  {
    id: 'review-zam',
    guestName: 'Brother Zam',
    originCountry: 'Singapore',
    countryCode: 'SG',
    travelDate: 'Summer 2024',
    partyComposition: 'Couple Expedition',
    quote: 'We shared lots of laughter, exchanged views and learned together. That is priceless. May Allah bless brother Ma and sister Viona for their care.',
    fullNarrative: 'As travelers from Singapore, halal food authenticity and prayer timing are our highest priorities. In every town—Kunming, Dali, Weishan—brother Ma pre-arranged our prayer stops at local centuries-old masjids and brought us to authentic home-cooked Muslim banquets that mainstream tourists could never access.',
    featuredPhotoUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
    tourReferenceSlug: '8d7n-muslim-village-and-food-trip',
    isHalalVerified: true,
    rating: 5
  },
  {
    id: 'review-farah',
    guestName: 'Farah & Family',
    originCountry: 'Malaysia',
    countryCode: 'MY',
    travelDate: 'Spring 2024',
    partyComposition: 'Family with Elderly Parents (5 Pax)',
    quote: 'The personalized pacing for our elderly parents was exceptional. We never felt rushed and every single dish was a feast.',
    fullNarrative: 'Traveling with elderly parents requires patience and thoughtful scheduling. Brother Ma ensured our comfortable private van was always ready, hotels had lift access, and every meal was steaming fresh halal Yunnan cuisine, especially the legendary Weishan beef hotpot.',
    featuredPhotoUrl: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=80',
    tourReferenceSlug: '8d7n-yunnan-muslim-friendly-trip',
    isHalalVerified: true,
    rating: 5
  },
  {
    id: 'review-tariq',
    guestName: 'Dr. Tariq & Afeefa',
    originCountry: 'United Kingdom',
    countryCode: 'GB',
    travelDate: 'Autumn 2024',
    partyComposition: 'Couple Expedition',
    quote: 'Seeing the profound Muslim heritage in Yunnan and hearing adhan echoing in ancient stone villages was deeply moving.',
    fullNarrative: 'We discovered Ma & Viona on YouTube and booked without hesitation. Everything promised was delivered with total integrity. The transparency about self-booking our flights to Kunming made everything easy, and brother Ma met us the moment we cleared customs.',
    featuredPhotoUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    tourReferenceSlug: '8d7n-muslim-village-and-food-trip',
    isHalalVerified: true,
    rating: 5
  }
];

const content = `import type { GuestStory } from '@/types/tour';

export const GUEST_STORIES: GuestStory[] = ${JSON.stringify(GUEST_STORIES, null, 2)};
`;

fs.writeFileSync(path.resolve('src/data/reviews.ts'), content, 'utf-8');
console.log('Wrote src/data/reviews.ts successfully.');
