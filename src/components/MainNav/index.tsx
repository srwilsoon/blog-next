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
import {List} from "@/components/List";
import {ListItem} from "@/components/List/components/ListItem";

export const MainNav = ({ items }: NavProps) => {
    const {isOpenMenu, handleToggleMenu} = useMainNav()
    return (
        <>
            <Nav>
                <List>
                    {
                        items.map((item, index) => {
                            return (
                                <ListItem key={index} >
                                    <Link href={item.link}>{item.title}</Link>
                                </ListItem>
                            )
                        })
                    }
                </List>
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