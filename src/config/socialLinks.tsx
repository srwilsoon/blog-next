import {GithubIcon, LinkedinIcon, YoutubeIcon} from "@/components/Icons";
import {SocialType} from "@/types/social";

export const socialLinkConfig: SocialType[] =[
        {
            title: 'Github',
            url: 'https://github.com/srwilsoon',
            icon: <GithubIcon size={28} />,
        },
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/wilson-lima/',
            icon: <LinkedinIcon size={28} />,
        },
        {
            title: 'Youtube',
            url: 'https://www.youtube.com/in/wilson-lima/',
            icon: <YoutubeIcon size={28} />,
        }
    ]
