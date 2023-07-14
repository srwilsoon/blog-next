import {Container, Content, CopyRight, CopyRightText, Section, SectionTitle} from "@/components/Footer/style";
import {Layout} from "@/components/Layout";
import {Logo} from "@/components/Logo";
import {siteConfig} from "@/config";
import {NavItem} from "@/types/header";
import Link from "next/link";
import {List} from "@/components/List";
import {ListItem} from "@/components/List/components/ListItem";
import {SocialMedia} from "@/components/SocialMedia";
import {socialLinkConfig} from "@/config/socialLinks";

type FooterProps = {
    items: NavItem[]
}
export const Footer = ({ items }:FooterProps) => {
    const fullYear = new Date().getFullYear();
    return (
        <>
            <Layout>
                <Container>
                    <Content>
                        <Section role="contentinfo">
                            <Logo />
                            <SectionTitle>{siteConfig.title}</SectionTitle>
                        </Section>
                        <Section role="contentinfo">
                            <SectionTitle>Redes</SectionTitle>
                            <SocialMedia items={socialLinkConfig} />
                        </Section>
                        <Section role="contentinfo">
                            <SectionTitle>Sitemap</SectionTitle>
                            <List className="flex-col">
                                {items.map((item, index) => (
                                    <ListItem key={index}>
                                        <Link href={item.link}>{item.title}</Link>
                                    </ListItem>
                                ))}
                            </List>
                        </Section>
                    </Content>
                    <CopyRight>
                        <CopyRightText>© {fullYear} {siteConfig.title}. All rights reserved.</CopyRightText>
                    </CopyRight>
                </Container>
            </Layout>

        </>
    )
}