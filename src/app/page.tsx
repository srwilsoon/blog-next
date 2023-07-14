import {PostCard} from "@/components/PostCard";
import {Grid} from "@/components/Grid";
import {Profile} from "@/components/Profile";
import {siteConfig} from "@/config";
import {PostService} from "@/services/PostService";

export default function Home() {
      const {posts}  = PostService.getAll();
      return (
        <main className="">
            <div className="my-6">
                <Profile items={siteConfig} />
            </div>
            <div>
                <Grid gap={6} sm={1} md={2} lg={3}>
                    {posts.map((post) => (
                        <PostCard key={post.slug} {...post}  />
                    ))}
                </Grid>
            </div>
        </main>
      )
}
