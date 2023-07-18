import {Profile} from "@/components/Profile";
import {siteConfig} from "@/config";
import {PostService} from "@/services/PostService";
import {Pagination} from "@/components/Pagination";
import { PostList } from "@/components/PostList";
import {paginationPages} from "@/functions/pagination-pages";

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
