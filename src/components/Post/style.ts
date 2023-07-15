import tw from "tailwind-styled-components";

export const Container = tw.div`
    flex 
    flex-col 
    items-center 
    justify-center`;

export const ImageContainer = tw.div`
    relative 
    h-96 
    w-full 
    sm:h[30rem]
`;

export const Content = tw.div`
    w-full 
    max--w-5xl`;

export const ContentTime  = tw.div`mt-10`;

export const Time = tw.p`
    mb-2 
    text-gray-400
`;

export const Title = tw.h1`
    mb-4
    text-5xl 
    font-bold 
    sm:text-6xl
`;

export const Description = tw.p`
    mb-8 
    text-2xl 
    text-gray-400
`;



