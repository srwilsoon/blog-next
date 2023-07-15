"use client";

import tw from "tailwind-styled-components";
import Link from "next/link";
import {ArrowLeftIcon} from "@/components/Icons";

export const Container = tw(Link)`
    group 
    flex 
    cursor-pointer 
    items-center 
    gap-1 
    text-gray-400
`;

export const IconContent = tw.div`
    flex
    h-8 
    items-center 
    justify-center 
    rounded-full
`;

export const Icon = tw(ArrowLeftIcon)`
    transition-transform 
    duration-300 
    ease-in-out 
    group-hover:-translate-x-1 
    group-hover:text-gray-100
`;

export const Text = tw.p`
     duration-300 
     ease-in-out 
     group-hover:text-gray-100   
`;

