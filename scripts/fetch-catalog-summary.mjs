import { execSync } from 'node:child_process';
import fs from 'node:fs';

try {
  const raw = execSync('curl.exe -s --connect-timeout 10 "https://manatravel.cn/wp-json/wp/v2/posts?per_page=20"', { maxBuffer: 10 * 1024 * 1024 });
  const posts = JSON.parse(raw.toString('utf-8'));
  console.log(`Found ${posts.length} posts:`);
  posts.forEach(p => {
    console.log(`- ID: ${p.id}, Slug: ${p.slug}, Title: ${p.title?.rendered}`);
  });
} catch (e) {
  console.error('Error fetching:', e.message);
}
