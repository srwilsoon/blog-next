
export type BlogPost = {
    slug: string;
    readingTime: number;
    title: string;
    description: string;
    tags?: string[];
    date: string;
    image: string;
    body: {
        code: string;
        raw: string;
    };
}