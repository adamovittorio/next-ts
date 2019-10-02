import { NextPage } from "next";
import fetch from "isomorphic-unfetch";

import Layout from "../components/MyLayout";
import PostLink from "../components/PostLink";
import { Show } from "../interfaces";

const Blog: NextPage<{ shows: Show[] }> = (props: { shows: Show[] }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    {props.shows.map(show => (
      <PostLink key={show.id} show={show} />
    ))}
    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
);

Blog.getInitialProps = async (): Promise<{ shows: Show[] }> => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry: any) => entry.show)
  };
};

export default Blog;
