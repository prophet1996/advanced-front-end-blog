import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

function post({ postData: { title, id, date } }) {
  return (
    <Layout>
      {title}
      <br />
      {id}
      <br />
      {date}
    </Layout>
  );
}

export default post;

// we have 2 posts pre-rendering & ssr-ssg
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// how to render $id.post
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
