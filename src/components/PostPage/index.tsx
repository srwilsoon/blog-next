import {Post} from "@/components/Post/index";
import {PostService} from "@/services/PostService";
import {notFound} from "next/navigation";

export default function PostaPage({ params }: { params: { slug: string }}) {
    const  result= PostService.getBySlug(params.slug);

    if(!result?.post) {
        notFound() // função que chama a pagina Not Found
    }
    return (
        <>
            {result?.post && (<Post post={result?.post}/>)}
        </>
    )
}

