// create-post.js
const fs = require('fs');
const path = require('path');

// Get title and type from command-line arguments
const [,, title = "Untitled Post", type = "thought"] = process.argv;

// Generate a URL-friendly slug from the title
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '.mdx';

// Get today's date in YYYY.MM.DD format
const today = new Date();
const date = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

// MDX front matter template (no inline comments)
const template = `---
title: "${title}"
type: "${type}"
date: "${date}"
author: "your name"
excerpt: "A short excerpt of your post."
link: ""
---

Your post content goes here.
`;

// Write the file in the /posts directory
const postsDir = path.join(__dirname, 'posts');
const filePath = path.join(postsDir, slug);

fs.writeFileSync(filePath, template);
console.log(`Created new post: ${filePath}`);