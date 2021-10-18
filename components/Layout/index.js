import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const index = ({ children, user }) => {
  return (
    <div>
      <Header user={user} />
      {children}
      <Footer />
    </div>
  );
};

export default index;
