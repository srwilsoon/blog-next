import {Container} from "@/components/List/components/ListItem/style";
import {HTMLAttributes} from "react";

type ListItemProps = HTMLAttributes<HTMLLIElement> &  {
    children: React.ReactNode
}
export const ListItem = ({ children , ...rest }: ListItemProps) => (<Container {...rest}>{children}</Container>)