import { ExternalRoute } from "../enums/ExternalRoute";
import { IconCollection } from "../enums/IconCollection";

export type IconInformation = {
    Icon: IconCollection;
    Link: ExternalRoute | string | URL;
}

export function GetSocialInformation(): IconInformation[] {
    const socials = [{
        Icon: IconCollection.LinkedIn,
        Link: ExternalRoute.LinkedIn
    },
    {
        Icon: IconCollection.Github,
        Link: ExternalRoute.Github
    },
    {
        Icon: IconCollection.Twitter,
        Link: ExternalRoute.Twitter
    },
    {
        Icon: IconCollection.StackOverflow,
        Link: ExternalRoute.StackOverflow
    }]

    return socials;
}