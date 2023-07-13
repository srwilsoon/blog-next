"use client";
import {useCallback, useState} from "react";

export const useMainNav = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleToggleMenu = useCallback(() => {
        setIsOpenMenu(prevState => !prevState);
    }, [isOpenMenu]);

    return {
        isOpenMenu,
        handleToggleMenu
    }
}