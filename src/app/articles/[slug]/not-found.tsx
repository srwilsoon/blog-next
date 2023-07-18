import {RecommendedPosts} from "@/components/RecommendedPost";
import {Empty} from "@/components/Empty";

export default function NotFound() {
    return (
        <Empty>
            <h1 className="text-4xl font-extrabold text-center">404 - Página não encontrada</h1>
            <p className="mt-4 text-xl text-gray-400 text-center">Puxa , que pena! A página que você está procurando não
                existe. :(</p>

            <p className="mt-4 text-xl text-gray-400 text-center">Mas não se preocupe, você pode encontrar outros
                conteúdos bem legais aqui:</p>
            <RecommendedPosts/>
        </Empty>
    );
}