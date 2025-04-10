import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, Post } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

// Next.js 13: You can use generateStaticParams for SSG
export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const p: { slug: string } = await params 
    const post: Post | null = await getPostBySlugOrNull(p.slug)
    if (!post) {
        // Return a 404 if the post doesn't exist
        notFound();
    }

    // Convert Markdown to HTML
    const processedContent = await remark().use(html).process(post.content);
    const contentHtml = processedContent.toString();

    return (
        <main style={{ padding: '2rem' }}>
            <h1>{post.title}</h1>
            <p style={{ fontStyle: 'italic' }}>
                {post.date} by {post.author}
            </p>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </main>
    );
}

// We can’t directly call getPostBySlug in the generateStaticParams function
// if it's reading from fs, but we can in the route itself. 
// This function checks whether the file exists (if not, return null).
function getPostBySlugOrNull(slug: string): Post | null {
    try {
        return getPostBySlug(slug);
    } catch {
        return null;
    }
}
