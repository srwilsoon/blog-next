import {allPosts} from "contentlayer/generated";
import {BlogPost} from "@/types/BlogPosts";
import {slugify} from "@/functions/slugify";
import {formatDate} from "@/functions/date";

export const PostService = {
    getAll:  ()=> {
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

         return {
             posts: posts
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