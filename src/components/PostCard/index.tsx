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
export const PostCard = ({ title, description, slug, tags, image, readingTime, date }: BlogPost) => {
    return (
        <>
            <LinkContainer href={`articles/${slug}`} >
                <ImageContainer>
                    <Image
                        src={image}
                        fill
                        priority
                        className="rounded-xl object-cover object-center"
                        alt="title"
                    />
                </ImageContainer>
                <Content>
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