import { Suspense } from "react";
import Posts from "../../../../../components/Posts";
// import Posts from "@/components/Posts";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

async function Page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div>
      <h2>
        {post.id}. {post.title}
      </h2>

      <p>{post.body}</p>
      <hr />
      <h3>otras publicaciones</h3>

      <Suspense>
        <Posts />
      </Suspense>
    </div>
  );
}

export default Page;
