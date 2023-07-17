"use client";
import {Button, Container, Icon} from "@/components/BackToTop/style";
import {useBackToTop} from "@/components/BackButton/useBackToTop";

export const BackToTop = () => {
    const {show} = useBackToTop()
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return (
      <>
          {
                show && (
                  <Container>
                      <Button title="Voltar ao topo" aria-label="Voltar ao topo" onClick={scrollTop}>
                          <Icon />
                      </Button>
                  </Container>
              )
          }
      </>
    );
}