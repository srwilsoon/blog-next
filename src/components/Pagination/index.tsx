import {
    Container,
    Link,
    NextPageIcon,
    PrevPageIcon,
    Text
} from "@/components/Pagination/style";

type PaginationProps = {
    currentPage: number;
    numberOfPages: number;
    prevPage: string;
    nextPage: string;
}
export const Pagination = ({ currentPage, numberOfPages,  nextPage, prevPage}: PaginationProps) => {
    return (
        <>
            <Container>
                <Link href={prevPage}>
                    <PrevPageIcon />
                    Página Anterior
                </Link>

                <Text>
                    {currentPage} de {numberOfPages}
                </Text>

                <Link href={nextPage}>
                    <NextPageIcon />
                    Próxima página
                </Link>

            </Container>
        </>
    )
}