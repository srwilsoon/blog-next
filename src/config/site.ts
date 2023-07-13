import {ProfileProps} from "@/types/profile";

export const siteConfig: ProfileProps = {
    title: "NextJS Blog",
    subtitle: "Seja bem vindo ao meu blog de NextJS e TailwindCSS",
    url: "https://nextjs-blog.vercel.app/",
    image: "/images/og-image.png",
    twitter: "@nextjs_blog",
    linkedin: "https://www.linkedin.com/in/wilson-lima-lucena/",
    github: "https://github.com/srwilsoon",
    author: "Wilson Lima",
    siteName: "NextJS Blog",
}

export type SiteProps = {
    items: ProfileProps;
}