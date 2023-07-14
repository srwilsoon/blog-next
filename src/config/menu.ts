import {NavProps} from "@/types/header";

export const navConfig: NavProps = {
    items: [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Artigos",
            link: "/articles/:slug"
        },
        {
            title: "Sobre",
            link: "/about"
        },
        {
            title: "Contato",
            link: "/contact"
        }
    ]
}
