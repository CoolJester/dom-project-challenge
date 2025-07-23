export type SpaceNewsResponse = {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<Result>
}

type Result = {
    id: number,
    title: string,
    authors: Array<Author>
    url: string,
    image_url: string,
    news_site: string,
    summary: string,
    published_at: string,
    featured: boolean,
    launches: Array<any>,
    events: Array<any>
}

type Author = {
    name: string,
    socials: any
}

// TODO: improve
type Social = {
    
}