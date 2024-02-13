import { FC } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: import.meta.env.VITE_API_GRAPHQL_URL,
    credentials: "include", // include cookies
  }),
});

interface IApolloClientProvider {
  children: React.ReactNode | Array<React.ReactNode> | undefined;
}
const ApolloClientProvider: FC<IApolloClientProvider> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
