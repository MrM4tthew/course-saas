import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const dashboard = ({ user }) => {
  return <div>Welcome {user.name}</div>;
};

export const getServerSideProps = withPageAuthRequired();

export default dashboard;
