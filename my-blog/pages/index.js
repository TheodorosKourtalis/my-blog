import Header from '../components/Header';
import DarkModeToggle from '../components/DarkModeToggle';
import { getLatestPosts } from '../lib/posts';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground text-text dark:text-darkText">
      <Header />
      <div className="max-w-3xl mx-auto py-10 px-6">
        <div className="flex justify-end">
          <DarkModeToggle />
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-header mb-4">welcome</h2>
          <p className="font-body text-base">
            A digital archive of intellectually stimulating discoveries.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-header mb-4">latest signals</h3>
          <ul>
            {posts.map(post => (
              <li key={post.slug} className="mb-6">
                <Link href={`/blog/${post.slug}`}>
                  <a className="block">
                    <h4 className="font-header text-xl">{post.title}</h4>
                    <p className="text-sm font-body">
                      {post.type} — {post.date} {post.author ? `· ${post.author}` : ''}
                    </p>
                    <p className="mt-2">{post.excerpt}</p>
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