import tw from "tailwind-styled-components";

export const Container = tw.div`
    border-gray-700 
    mt-4 
    rounded-lg 
    border-[1px]
`;

export const Content = tw.pre`
    text-md 
    mb-4 
    mt-6 
    overflow-x-auto 
    bg-[#211d32] 
    pb-3
    pt-2
`;

export const Header = tw.div`
    flex w-full justify-between rounded-t-lg border-gray-700 bg-[#19171d] px-3 py-2
`;


