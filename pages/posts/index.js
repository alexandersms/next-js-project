import Layout from "../../components/Layout";
import Link from "next/link";

function PostNode({title}) {
  return (
    <li>
      <Link href="/posts/[title]" as={`/posts/${title}`}>
        <a>Blog {title}</a>
      </Link>
    </li>
  );
}

function Blog() {
  const title = "Posts";

  return (
    <Layout title={title}>
      <ul>
        <PostNode title="post-1" />
        <PostNode title="post-2" />
        <PostNode title="post-3" />
      </ul>
    </Layout>
  );
}

export default Blog;
