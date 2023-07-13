import Image  from "next/image";
import {SiteProps} from "@/config";
import {Subtitle, Title} from "@/components/Profile/style";

export const Profile = ({ items }: SiteProps) => {
    return (
        <>
           <Image
               src="/assets/images/logo.png"
               alt="profile"
               width={80}
               height={80}
               title="profile"
               priority
               className="rounded-full"
           />
            <Title>{items.title}</Title>
            <Subtitle>{items.subtitle}</Subtitle>
        </>
    )
}