import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store.ts";
import App from "./App.tsx";
import ApolloClientProvider from "./apolloClient/ApolloClientProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <Provider store={store}>
      <ApolloClientProvider>
        <Router>
          <App />
        </Router>
      </ApolloClientProvider>
    </Provider>
  </ChakraProvider>
);
