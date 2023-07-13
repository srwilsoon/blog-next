import Link from "next/link";
import Image from "next/image";
import {Tag} from "@/components/Tag";

export const PostCard  = () => {
    return (
        <>
            <Link href="#" >
                <div className="relative h-80 w-full">
                    <Image
                        src="/assets/images/post.jpeg"
                        fill
                        priority
                        className="rounded-xl object-cover object-center"
                        alt="title"
                    />
                </div>
                <div className="pt-3">
                    <div className="mb-3 flex flex-wrap gap-2">
                        {[ 'javascript', 'typescript', 'reactjs', 'nextjs', 'nodejs' ]
                            .map((tag, index) =>
                            (
                                <Tag
                                    key={index}
                                    size="xs"
                                >
                                    {tag}
                                </Tag>
                            ))}
                    </div>
                    <time className="text-gray-400">
                        12 de julho de 2023
                    </time>
                    <p className="mt-2 max-w-md text-ellipsis text-2xl font-medium text-gray-50">O que é SOLID</p>
                    <p className="mt-3 text-gray-400">Vamos aprender um pouco sobre SOLID </p>
                </div>
            </Link>
        </>
    )
}