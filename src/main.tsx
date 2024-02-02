import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store.ts";
import App from "./App.tsx";
import { ApolloComponent } from "./apolloClient/ApolloProviderComponent.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <ApolloComponent>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ApolloComponent>
  </ChakraProvider>
);
