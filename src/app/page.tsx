import {Profile} from "@/components/Profile";
import {siteConfig} from "@/config";
import {PostService} from "@/services/PostService";
import {Pagination} from "@/components/Pagination";
import { PostList } from "@/components/PostList";
import {paginationPages} from "@/functions/pagination-pages";

export default function Home() {
      const {posts, currentPage, numberOfPages}  = PostService.getAll();
    const { prevPage, nextPage } = paginationPages(currentPage)

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
