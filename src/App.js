import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./api/client";
import Main from "./pages/Main";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
};

export default App;
