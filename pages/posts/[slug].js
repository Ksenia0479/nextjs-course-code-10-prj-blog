import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostsFiles, getPostData } from "../../lib/posts-util";

function PostDetailPage(props) {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const postIdentifier = params.slug;
  const postData = getPostData(postIdentifier);

  return {
    props: { post: postData },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const posts = getPostsFiles();
  const slugs = posts.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default PostDetailPage;
