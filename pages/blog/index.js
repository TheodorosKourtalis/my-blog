// pages/blog/index.js
import Header from '../../components/Header';
import { getAllPosts } from '../../lib/posts';
import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground text-text dark:text-darkText">
      <Header />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-4xl font-header mb-8">signals</h2>
        <ul className="list-none space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <a className="block hover:bg-lightGray dark:hover:bg-gray-800 transition-colors p-4 rounded">
                  <h3 className="font-header text-3xl">{post.frontMatter.title}</h3>
                  <p className="text-sm font-body text-gray-600 dark:text-gray-400">
                    {post.frontMatter.type} — {post.frontMatter.date} {post.frontMatter.author ? `· ${post.frontMatter.author}` : ''}
                  </p>
                  <p className="mt-2 text-lg">{post.frontMatter.excerpt}</p>
                </a>
              </Link>
              <hr className="mt-4 border-t border-gray-300 dark:border-gray-600" />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts }
  };
}