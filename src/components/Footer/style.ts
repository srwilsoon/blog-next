import tw from "tailwind-styled-components";

export const Container = tw.footer`
    flex
    flex-col
    border-t
    border-slate-600
    pb-4 
    pt-6
    `;

export const Content = tw.div`
    flex 
    w-full
    justify-between
    pb-10
    `;

export const Section = tw.div`
    flex
    flex-col
    gap-6
    max-w-[8rem]
    sm:max-w-xs
    `;

export const SectionTitle = tw.p` 
        text-bold
        text-xl
    `;

export const CopyRight = tw.div`
    mt-3
    flex
    w-full
    items-center
    justify-center
    `;

export const CopyRightText = tw.div`
    mb-2
    max-w-[18rem]
    text-center
    text-gray-500
    sm:max-w-fit
    `;