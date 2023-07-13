import React from "react";
import {Container} from "@/components/Tag/style";

export type TagProps = {
    children?: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "xs";
}
export const Tag = ({ children , size = 'sm' }: TagProps) => {
    return(
        <>
            <Container size={size}>
                {children}
            </Container>
        </>
    )

}