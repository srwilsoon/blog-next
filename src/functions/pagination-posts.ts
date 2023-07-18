import {BlogPost} from "@/types/BlogPosts";

export const paginationPosts = (allPosts: BlogPost[],  limit = 10, currentPage: number ) => {
    return allPosts.slice((currentPage - 1) * limit, currentPage * limit);
}