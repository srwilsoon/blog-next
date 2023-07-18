import Image from "next/image";
import { Tag } from "@/components/Tag";
import { BlogPost } from "@/types/BlogPosts";
import {
    Content,
    Description,
    ImageContainer,
    LinkContainer,
    TagsContainer,
    TimeContent,
    Title
} from "@/components/PostCard/style";

type PostCardProps = {
    post : BlogPost;
    isMain?: boolean;
}
export const PostCard = ({post, isMain = false} : PostCardProps) => {
    const { title, description, slug, tags, image, readingTime, date } = post;
    return (
        <>
            <LinkContainer href={`articles/${slug}`} isMain={isMain}>
                <ImageContainer className={`${isMain && 'lg:mr-3'}`}>
                    <Image
                        src={image}
                        fill
                        priority
                        className="rounded-xl object-cover object-center"
                        alt="title"
                    />
                </ImageContainer>
                <Content className={`${isMain && 'lg:pt-0'}`}>
                    <TagsContainer>
                        {tags?.map((tag, index) =>
                        (
                            <Tag
                                key={index}
                                size="xs"
                            >
                                {tag}
                            </Tag>
                        ))}
                    </TagsContainer>
                    <TimeContent>
                        {date} * {readingTime} min de leitura
                    </TimeContent>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Content>
            </LinkContainer>
        </>
    )
}