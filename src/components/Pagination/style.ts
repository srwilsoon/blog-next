"use client"
import tw from "tailwind-styled-components";
import {ArrowLeftIcon, ArrowRightIcon} from "@/components/Icons";
import NextLink from "next/link";
export const Container = tw.div`
    flex
    w-full
    items-end
    justify-between
    pt-7
`;

export const PrevPageIcon = tw(ArrowLeftIcon)`
    transition-transform
    duration-300
    ease-in-out
    text-lg
    
    group-hover:-translate-x-1
`;

export const NextPageIcon = tw(ArrowRightIcon )`
    transition-transform
    duration-300
    ease-in-out
    text-lg
    
    group-hover:translate-x-1
`;

export const Text = tw.p``;

export const Link = tw(NextLink)`
    
    flex 
    items-center
    gap-2
    group
    
    duration-300
    transition-colors
    hover:text-link
    
`;