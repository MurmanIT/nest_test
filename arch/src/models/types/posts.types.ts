export type PostType  = {
    title: string;
    post: string;       
    create_at: Date;
    update_at: Date;
    userId?: number;
}

export type SearchPostType = {
    title?: string;
    userId?: number;
}