import { Suspense } from "react";
import { BlogPost } from "./blog-post";

export default function BlogsSlugPage({ params }: PageProps<"/blogs/[slug]">) {
    return (
        <div>
            <h1>Blog</h1>
            <Suspense fallback={<p>Loading post...</p>}>
                <BlogPost params={params} />
            </Suspense>
        </div>
    );
}
