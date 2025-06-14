import { mockPosts } from "@/mocks/posts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="">My Blog</h1>
      <div className="">
        {mockPosts.map((post) => (
          <article key={post.id} className=""> 
            <h2 className="">
              <Link href={`/posts/${post.id}`} className="">
                {post.title}
              </Link>
            </h2>
            <p className="">
              {new Date(post.createdAt).toLocaleString()}
            </p>
            <p className="">
              {post.content.substring(0,100)}...
            </p>
            <Link
              href = {`/posts/${post.id}`}
              className=""
            >
              Read More
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
