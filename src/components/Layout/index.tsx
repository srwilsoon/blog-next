import {Container} from "@/components/Layout/style";

type LayoutProps = {
    children: React.ReactNode
}
export const Layout = ({children}: LayoutProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}