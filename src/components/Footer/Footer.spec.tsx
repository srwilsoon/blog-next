import {NavItem} from "@/types/header";
import {render, screen} from "@testing-library/react";
import {Footer} from "./index";
import {siteConfig} from "@/config";
const items: NavItem[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About',
        link: '/about'
    }
]

describe('Footer',  () =>{
    it('should render the footer',  () =>{
        render(<Footer items={items} />)

        const socialMediaSection = screen.getByText(/redes/i);
        const sitemapSection = screen.getByText(/sitemap/i);
        const title = screen.getByText(siteConfig.title);

        expect(socialMediaSection).toBeVisible();
        expect(sitemapSection).toBeVisible();
        expect(title).toBeVisible();
    });
});