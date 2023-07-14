import {SocialType} from "@/types/social";
import {Link, Text} from "@/components/SocialMedia/style";
import {List} from "@/components/List";
import {ListItem} from "@/components/List/components/ListItem";

type SocialMediaItem = {
    items: SocialType[]
}
export const SocialMedia = ({ items }: SocialMediaItem ) => {
    return (
        <>
            <List className="flex flex-col">
                {items.map((item, index) => (
                    <ListItem key={index}>
                        <Link href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.icon}
                            <Text>{item.title}</Text>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    );
}