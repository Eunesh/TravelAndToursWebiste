import { FC } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
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
