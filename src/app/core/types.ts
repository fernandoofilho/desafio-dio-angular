export type Article = {
    title: string;
    content: Content[];
    image: Image;
}

export type Content = {
    title: string;
    text: string;
    images?: Image[];
}

export type Image = {
    url: string;
    description: string;
}


export type RelatedArticle = {
    title: string;
    date: Date;
    image: Image;
    description: string;
}