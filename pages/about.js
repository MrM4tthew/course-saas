import React from "react";
import Layout from "../components/Layout";
import { useUser } from "@auth0/nextjs-auth0";

const About = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Layout user={user}>
      {/* {user ? <span>this is about page</span> : ""} */}
      this is about page
      {/* <Footer /> */}
    </Layout>
  );
};

export default About;
