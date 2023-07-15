
import {Container, Icon, IconContent, Text} from "@/components/BackButton/style";

export const BackButton = () => {
    return (
        <Container href="/">
            <IconContent>
                <Icon size={20} />
            </IconContent>
            <Text>
                Voltar à listagem
            </Text>
        </Container>
    )
}