export interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    comment: Comment[];
}

export interface Comment {
    id: number;
    postId: number;
    author: string;
    content: string;
    createdAt: string;
}