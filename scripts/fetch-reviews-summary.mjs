import { execSync } from 'node:child_process';

try {
  const rawPost = execSync('curl.exe -s --connect-timeout 10 "https://manatravel.cn/wp-json/wp/v2/posts/2542"', { maxBuffer: 10 * 1024 * 1024 });
  const post = JSON.parse(rawPost.toString('utf-8'));
  console.log('Post 2542 Title:', post.title?.rendered);
  // Extract text snippets without dumping full HTML
  const content = post.content?.rendered || '';
  const textOnly = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('Review Post snippet (first 500 chars):', textOnly.slice(0, 500));

  const rawComments = execSync('curl.exe -s --connect-timeout 10 "https://manatravel.cn/wp-json/wp/v2/comments?per_page=20"', { maxBuffer: 10 * 1024 * 1024 });
  const comments = JSON.parse(rawComments.toString('utf-8'));
  console.log(`\nFound ${comments.length} comments. Sample authors:`);
  comments.slice(0, 8).forEach(c => {
    const snippet = (c.content?.rendered || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`- Author: ${c.author_name}, snippet: "${snippet.slice(0, 80)}..."`);
  });
} catch (e) {
  console.error('Error:', e.message);
}
