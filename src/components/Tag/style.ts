import tw from "tailwind-styled-components";
import {TagProps} from "@/components/Tag/index";

export const Container = tw.p<Pick<TagProps, 'size'>>`
    rounded-2xl 
    bg-gray-500 
    px-3 
    py-1 
    font-normal 
    capitalize 
    text-gray-200 
    transition-colors 
    durration-300
    
    ${({size}) => `text-${size}`}
    
    `;