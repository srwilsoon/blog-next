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
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === numberOfPages;

    return (
        <>
            <Container>
                {
                    !isFirstPage && (
                        <Link href={prevPage}>
                            <PrevPageIcon />
                            Página Anterior
                        </Link>
                    )
                }

                <Text>
                    {currentPage} de {numberOfPages}
                </Text>

                {
                    !isLastPage && (
                        <Link href={nextPage}>
                            Próxima página
                            <NextPageIcon />
                        </Link>
                    )
                }

            </Container>
        </>
    )
}