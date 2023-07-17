import {Container, Content, Header} from "@/components/Mdx/components/Pre/style";
import {HTMLAttributes} from "react";

type PreProps = HTMLAttributes<HTMLPreElement> & {
    children: React.ReactNode
    'data-language'?: string
}
export const Pre = ({ children, ...props }: PreProps) => {
    const language = props['data-language'] || 'shell'
    return (
        <Container >
            <Header>
                <p>.{language}</p>
            </Header>
           <Content {...props}>
                {children}
           </Content>
        </Container>
    )
}