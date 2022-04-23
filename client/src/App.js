// import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { motion, AnimatePresence } from "framer-motion";


import Home from "./pages/Home";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Addplanting from './Components/Addplanting/index';
import PageTabs from "./Components/Tabs";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
 

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          {/* <Header /> */}
          <div className="container">
            <Routes>
              <Route exact path="/" component={Home} />
            </Routes>
          </div>
          <PageTabs/>
          <Sidebar>
          </Sidebar>
        </div>
      </Router>
    </ApolloProvider>


    
  );
}

export default App;



