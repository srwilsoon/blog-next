import {Container} from "@/components/List/style";
import {HTMLAttributes} from "react";

type ListProps = HTMLAttributes<HTMLUListElement> & {
    children: React.ReactNode
}
export const List = ({children, ...rest}: ListProps) => {
    return(
        <>
            <Container {...rest}>
                {children}
            </Container>
        </>
    )
}