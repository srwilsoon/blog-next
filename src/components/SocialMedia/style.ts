import tw from "tailwind-styled-components";
import NextLink from "next/link";

export const Container  = tw.div``;
export const Link = tw(NextLink)`
    flex
    items-center
`;

export const Text = tw.p`
    ml-1
`