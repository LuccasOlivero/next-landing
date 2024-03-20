import Link from "next/link";

async function loadPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return data;
}

async function Posts() {
  const data = await loadPost();
  return (
    <div>
      {data.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/store/category/computer/${post.id}`}>
              <h2>
                {post.id}
                {post.title}
              </h2>
            </Link>

            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
