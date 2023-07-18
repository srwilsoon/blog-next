import PostaPage from '@/components/PostPage'
import {PostService} from "@/services/PostService";
import {siteConfig} from "@/config";
type ArticleProps = {
    params: {
        slug: string
    }
}



export function generateStaticParams() {
    const { posts } = PostService.getAll();
    return posts.map((post) => ({
        slug: post.slug
    }));
}
export function generateMetadata({ params }: ArticleProps) {
    const { slug } = params;
    const result = PostService.getBySlug(slug);
    const post = result?.post;
    if (!post) {
        return {
            title: 'Post não encontrado'
        };
    }

    return {
        title: post.title,
        description: post.description,
        metadataBase: new URL(siteConfig.url),
        openGraph: {
            type: 'website',
            url: `${siteConfig.url}/${post.slug}`,
            title: post.title,
            description: post.description,
            siteName: siteConfig.siteName,
            images: [
                {
                    url: `${siteConfig.url}${post.image}`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [`${siteConfig.url}${post.image}`]
        }
    };
}

export default function Article({params}: ArticleProps) {
    return (
            <PostaPage params={params}  />
    )
}