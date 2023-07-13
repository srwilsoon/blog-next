import tw from 'tailwind-styled-components';

export const Container = tw.header`
    flex 
    items-center 
    h-16 
    w-full
    fixed 
    z-40 
    shadow-lg 
    bg-primary/60
    backdrop-blur-lg
    transiction-all
    duration-300
    ease-in-out
    `;

export const Content = tw.div`
    flex 
    h-full 
    w-full 
    items-center 
    justify-between 
    px-4
    `;


