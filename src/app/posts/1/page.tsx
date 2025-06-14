import { mockPosts } from "@/mocks/posts";
import { notFound } from "next/navigation";

export default function PostPage({ params }) : { params: {id: string}}) {
    const post = mockPosts.find((p) => p.id === Number(params.id));

    if(!post) {
        notFound();
    }

    return (
        <div className="">
            <article className="">
                <h1 className="">
                    {post.title}
                </h1>
                <p className="">
                    Posted on {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <div className="">
                    <p>{post.content}</p>
                </div>
            </article>

            <section className="">
                <h2 className="">Comments</h2>
                {post.comment.length > 0 ? (
                    <div className="">
                        {post.comment.map((comment) => (
                            <div key={comment.id} className="">
                                <p className="">{comment.author}</p>
                                <p className="">
                                    {new Date(comment.createdAt).toLocaleString()}
                                </p>
                                <p>{comment.content}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No comments.</p>
                )}
            </section>

            <section>
                <h2 className="">Add a comment</h2>
                <CommentForm postId={post.id}/>
            </section>
        </div>
    );
}