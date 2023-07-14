import {PostService} from "@/services/PostService";

type ArticleProps = {
    params: {
        slug: string
    }
}
export default function Article({params}: ArticleProps) {

    const { slug } = params;

    const result = PostService.getBySlug(slug);
    const post = result?.post
    return (
        <>
            <p>{params.slug}</p>

            { post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </>
            )
            }
        </>
    )
}