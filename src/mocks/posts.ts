import { Post } from "@/app/types/post";

export const mockPosts: Post[] = [
    {
        id: 1,
        title: "My First Blog",
        content: "This is my content guys",
        createdAt: "2025-06-14T00:00:00Z",
        comment:[
            {
                id: 1,
                postId: 1,
                author: "Jane",
                content: "Good job",
                createdAt: "2025-06-14T00:40:00Z"
            }
        ]
    }
]