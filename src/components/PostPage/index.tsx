import {Post} from "@/components/Post/index";
import {PostService} from "@/services/PostService";

export default function PostaPage({ params }: { params: { slug: string }}) {
    const  result= PostService.getBySlug(params.slug);


    return (
        <>
            {result?.post && (<Post post={result?.post}/>)}
        </>
    )
}

