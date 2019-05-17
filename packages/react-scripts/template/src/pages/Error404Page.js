import React from "react";

// TODO: refactor page errors
const Status = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }}
  />
);

const Error404Page = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
);

export default Error404Page;
