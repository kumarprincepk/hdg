import blogPosts from '@/public/data/blogPosts';
import BlogPageClient from './BlogPageClient';

export function generateStaticParams() {
  return blogPosts.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const blog = blogPosts.find((item) => item.slug === slug);

  return <BlogPageClient blog={blog} slug={slug} />;
}
