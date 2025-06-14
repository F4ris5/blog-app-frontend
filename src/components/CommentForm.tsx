'use client';

import { useState } from "react";

export default function CommentForm({ postId }: { postId: number }) {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log({postId, author, content});

        setAuthor('');
        setContent('');
        setIsSubmitting(false);
        alert('Comment Submitted!');
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <div>
                <label htmlFor="author" className="">
                    Name
                </label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  className=""
                />
            </div>
            <div>
                <label htmlFor="content" className="">
                    Comment
                </label>
                <textarea
                 id= "content"
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 required
                 rows={4}
                 className=""
                />
            </div>
            <button
             type = "submit"
             disabled= {isSubmitting}
             className=""
             >
                {isSubmitting ? 'Submitting...' : 'Submit Content'}
            </button>
        </form>
    )
}