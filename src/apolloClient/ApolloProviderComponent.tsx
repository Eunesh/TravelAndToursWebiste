import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql", // Graphql API endpoint
  cache: new InMemoryCache(),
});

export const ApolloComponent = ({ children }: any) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
