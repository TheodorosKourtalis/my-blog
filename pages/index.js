// pages/index.js
import Header from '../components/Header';
import DarkModeToggle from '../components/DarkModeToggle';
import { getLatestPosts } from '../lib/posts';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground text-text dark:text-darkText">
      <Header />
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex justify-end mb-4">
          <DarkModeToggle />
        </div>
        <section className="mb-12">
          <h2 className="text-4xl font-header mb-4">welcome</h2>
          <p className="font-body text-lg leading-relaxed">
            A digital archive of intellectually stimulating discoveries.
          </p>
        </section>
        <section>
          <h3 className="text-3xl font-header mb-6">latest signals</h3>
          <ul className="list-none space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <a className="block hover:bg-lightGray dark:hover:bg-gray-800 transition-colors p-4 rounded">
                    <h4 className="font-header text-2xl">{post.title}</h4>
                    <p className="text-sm font-body text-gray-600 dark:text-gray-400">
                      {post.type} — {post.date} {post.author ? `· ${post.author}` : ''}
                    </p>
                    <p className="mt-2 text-base">{post.excerpt}</p>
                  </a>
                </Link>
                <hr className="mt-4 border-t border-gray-300 dark:border-gray-600" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getLatestPosts();
  return {
    props: { posts }
  };
}