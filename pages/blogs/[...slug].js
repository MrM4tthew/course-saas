import React from "react";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { useUser } from "@auth0/nextjs-auth0";
import { MaxWidth } from "../../styles/globalStyle";

const ContentContainer = styled(MaxWidth)`
  margin: 10px auto;

  figure {
    display: flex;
    justify-content: center;
  }
`;

const Blog = ({ blog }) => {
  // console.log(blog);

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Layout user={user}>
      <ContentContainer>
        {/* <h2>{blog.title.rendered}</h2> */}
        {/* {ReactHtmlParser(blog.content.rendered)} */}
      </ContentContainer>
    </Layout>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// }

// export const getStaticProps = async (ctx) => {
//   const { slug } = ctx.params;

//   const response = await fetch(
//     `http://wordpressrestapi.local/wp-json/wp/v2/posts?_embed&slug=${slug}`,
//     {
//       headers: {
//         // Authorization: "Basic " + process.env.BASIC_AUTH_WORDPRESS_BLOG,
//         Authorization:
//           "Basic " + "dXNlcjM6VnFnRiBvc21XIFlFaVYgeTdPViBHaVVPIFZYc00=",
//       },
//     }
//   );

//   const blog = await response.json();

//   return {
//     props: {
//       blog: blog[0],
//     },
//   };
// };

export default Blog;
// export default blog;
