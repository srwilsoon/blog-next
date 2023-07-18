import {allPosts} from "contentlayer/generated";
import {BlogPost} from "@/types/BlogPosts";
import {slugify} from "@/functions/slugify";
import {formatDate} from "@/functions/date";
import {paginationPosts} from "@/functions/pagination-posts";

type GetPostAllParams = {
    limit?: number;
    currentPage?: number;
}
export const PostService = {
    getAll:  ({ limit = 10, currentPage = 1}: GetPostAllParams = {})=> {
         const posts =   allPosts.map((post) => {
             return {
                        slug: slugify(post.slug),
                        title: post.title,
                        readingTime: Math.ceil(post.readingTime.minutes),
                        description: post.description,
                        tags: post.tags,
                        date: formatDate(post.date),
                        image: post.image,
                        body: {
                            code: post.body.code,
                            raw: post.body.raw,
                        }
                }
            });

        const numberOfPages = Math.ceil(posts.length / limit);
        const paginatePosts = paginationPosts(posts, limit, currentPage);

         return {
             posts: paginatePosts,
             numberOfPages,
             currentPage
         }
    },

    getBySlug: (slug: string) => {
        const post = allPosts.find((post) => slugify(post.slug) === slug);
        if (!post) return undefined;

        return {
            post: {
                slug: slugify(post.slug),
                title: post.title,
                readingTime: Math.ceil(post.readingTime.minutes),
                description: post.description,
                tags: post.tags,
                date: formatDate(post.date),
                image: post.image,
                body: {
                    code: post.body.code,
                    raw: post.body.raw,
                }
            }
        }
    }
}