import {Profile} from "@/components/Profile";
import {siteConfig} from "@/config";
import {PostService} from "@/services/PostService";
import {Pagination} from "@/components/Pagination";
import { PostList } from "@/components/PostList";
import {paginationPages} from "@/functions/pagination-pages";

type PostPageProps = {
    params: { slug: string };
};

export function generateStaticParams() {
    const { posts } = PostService.getAll();
    return posts.map((post) => ({
        slug: post.slug
    }));
}
export function generateMetadata({ params }: PostPageProps) {
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

export default function Page({params}: { params: { page: string }}) {
    const currentPage = +params.page
    const {posts, numberOfPages}  = PostService.getAll({currentPage});
    const { prevPage, nextPage } = paginationPages(currentPage)

    if(!posts.length) return <div><h1>Não há posts</h1></div>
    return (
        <main>
            <div className="my-10">
                <Profile items={siteConfig} />
            </div>
            <PostList posts={posts} />
            <Pagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </main>
    )
}
