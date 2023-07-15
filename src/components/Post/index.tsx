import {BlogPost} from "@/types/BlogPosts";
import Image from "next/image";
import {Mdx} from "@/components/Mdx";
import {Container, Content, ContentTime, Description, ImageContainer, Time, Title} from "@/components/Post/style";

type PostProps = {
    post: BlogPost
}
export const Post = ({ post }: PostProps) => {
    const { title, description, image, date, readingTime, body } = post;
    return (
        <Container>
            <ImageContainer>
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="rounded-xl object-cover object-center"
                />
            </ImageContainer>
            <Content>
                <ContentTime>
                    <Time>
                        {date} - {readingTime} minutos de leitura
                    </Time>
                </ContentTime>
                <Title>{title}</Title>
                <Description>
                    {description}
                </Description>
            </Content>

            <Mdx code={body.code}/>

        </Container>
    )
}