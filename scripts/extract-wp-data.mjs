import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = 'https://manatravel.cn/wp-json/wp/v2';
const DATA_DIR = path.resolve('data');

async function fetchEndpoint(endpoint) {
    const url = `${BASE_URL}/${endpoint}?per_page=100`;
    console.log(`Fetching: ${url}`);
    try {
        const res = await fetch(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        if (!res.ok) {
            console.error(`Failed ${endpoint}: ${res.status} ${res.statusText}`);
            return [];
        }
        return await res.json();
    } catch (err) {
        console.error(`Error fetching ${endpoint}:`, err);
        return [];
    }
}

async function run() {
    await fs.mkdir(DATA_DIR, { recursive: true });

    const [posts, pages, media, comments] = await Promise.all([
        fetchEndpoint('posts'),
        fetchEndpoint('pages'),
        fetchEndpoint('media'),
        fetchEndpoint('comments')
    ]);

    await fs.writeFile(path.join(DATA_DIR, 'wp-posts.json'), JSON.stringify(posts, null, 2));
    await fs.writeFile(path.join(DATA_DIR, 'wp-pages.json'), JSON.stringify(pages, null, 2));
    await fs.writeFile(path.join(DATA_DIR, 'wp-media.json'), JSON.stringify(media, null, 2));
    await fs.writeFile(path.join(DATA_DIR, 'wp-comments.json'), JSON.stringify(comments, null, 2));

    console.log(`Successfully extracted:`);
    console.log(`- Posts: ${posts.length}`);
    console.log(`- Pages: ${pages.length}`);
    console.log(`- Media: ${media.length}`);
    console.log(`- Comments: ${comments.length}`);
}

run();
