import {Grid} from "@/components/Grid";
import {PostCard} from "@/components/PostCard";
import {PostService} from "@/services/PostService";
import {Container} from "@/components/RecommendedPost/styles";

export const RecommendedPosts = () => {
    const {posts} = PostService.getAll()
    const postsRecommended = posts.slice(0, 2);
    return (
        <>
            <Container>
                <Grid sm={1} md={2} lg={2} gap={2}>
                    {
                        postsRecommended.map((post) => (
                            <PostCard key={post.slug} post={post}/>
                        ))}
                </Grid>
            </Container>
        </>
    )
}