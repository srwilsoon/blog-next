import {Container, Content} from './styles';
import {NavProps} from "@/types/header";
import {Logo} from "@/components/Logo";
import {MainNav} from "@/components/MainNav";

export const Header = ({ items }: NavProps) => {
    return (
        <Container>
            <Content>
                <Logo />
                <MainNav items={items} />
            </Content>
        </Container>
    )
}