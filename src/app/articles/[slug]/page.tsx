import PostaPage from '@/components/PostPage'
type ArticleProps = {
    params: {
        slug: string
    }
}
export default function Article({params}: ArticleProps) {
    return (
            <PostaPage params={params}  />
    )
}