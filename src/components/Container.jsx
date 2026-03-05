import React from "react";

const Container = ({ children }) => {
  return (
    // w-11/12 py-10
    <div className="container  w-11/12 py-10 mx-auto">{children}</div>
  );
};

export default Container;
