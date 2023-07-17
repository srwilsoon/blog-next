import {PostCard} from "@/components/PostCard";
import {Grid} from "@/components/Grid";
import {Profile} from "@/components/Profile";
import {siteConfig} from "@/config";
import {PostService} from "@/services/PostService";
import {Pagination} from "@/components/Pagination";

export default function Home() {
      const {posts}  = PostService.getAll();
      return (
        <main>
            <div className="my-10">
                <Profile items={siteConfig} />
            </div>
                <Grid sm={1} md={2} lg={3} gap={8}>
                    {posts.map((post) => (
                        <PostCard key={post.slug} {...post}  />
                    ))}
                </Grid>
                <Pagination currentPage={1} numberOfPages={5} prevPage="/" nextPage="/page/2" />
        </main>
      )
}
