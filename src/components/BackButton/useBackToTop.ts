"use client"
import {useCallback, useEffect, useState} from "react";

export const useBackToTop = () => {
    const [show , setShow] = useState(false);
    const [ lastScrowlVerticalPosition , setLastScrowlVerticalPosition ] = useState(0);

    const handleScroll = useCallback(() => {
        if (window.scrollY === 0) {
            setShow(false);
            return;
        }

        if(window.scrollY  > lastScrowlVerticalPosition){
            setShow(false);
        }else {
            setShow(true);
        }

        setLastScrowlVerticalPosition(window.scrollY);
    },[lastScrowlVerticalPosition])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[handleScroll])

    return {
        show,
    }
}