import {Grid} from "@/components/Grid";
import {PostCard} from "@/components/PostCard";
import {BlogPost} from "@/types/BlogPosts";
import {Container} from "@/components/PostList/style";

type PostListProps = {
    posts: BlogPost[];

}
export const PostList = ({posts}  : PostListProps) => {
    const firstPost = posts[0];
    const postsWithoutFirst = posts.slice(1);

    return (
        <Container>
            {firstPost && <PostCard post={firstPost}  isMain/>}
            <Grid sm={1} md={2} lg={3} gap={8}>
                {
                    posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </Grid>
        </Container>

    );
}