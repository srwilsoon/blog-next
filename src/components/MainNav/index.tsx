"use client";
import {
    ContainerMobile,
    Content,
    Nav,
    NavItem,
    NavItemLink,
    NavMobile,
    NavMobileItem,
    NavMobileItemLink
} from "@/components/MainNav/style";
import {NavProps} from "@/types/header";
import Link from 'next/link';
import {ToggleButton} from "@/components/MainNav/components/ToggleButton";
import {useMainNav} from "@/hooks/useMainNav";

export const MainNav = ({ items }: NavProps) => {
    const {isOpenMenu, handleToggleMenu} = useMainNav()
    return (
        <>
            <Nav>
                <NavItem>
                    {
                        items.map((item, index) => {
                            return (
                                <NavItemLink key={index} >
                                    <Link href={item.link}>{item.title}</Link>
                                </NavItemLink>
                            )
                        })
                    }
                </NavItem>
            </Nav>
            <Content>
                <ToggleButton isOpenMenu={isOpenMenu} handleToggleMenu={handleToggleMenu} />
            </Content>
            {
                isOpenMenu && (
                    <ContainerMobile>
                        <NavMobile>
                            <NavMobileItem>
                                {
                                    items.map((item, index) => {
                                        return (
                                            <NavMobileItemLink key={index} >
                                                <Link href={item.link}>{item.title}</Link>
                                            </NavMobileItemLink>
                                        )
                                    })
                                }
                            </NavMobileItem>
                        </NavMobile>
                    </ContainerMobile>
                )
            }
         </>
    )
}