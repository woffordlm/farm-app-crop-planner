// import React, { useEffect } from "react";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
<<<<<<< HEAD
import Home from "./pages/Home";
// import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PageTabs from "./Components/Tabs";
import { QUERY_CROPREFERENCE } from "./utils/queries";
import { useQuery } from '@apollo/client';
// import {QUERY_CROPREFERENCE} from '../src/utils/queries'
=======
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import PageTabs from "./Components/Tabs";
import Home from './pages/Home'


>>>>>>> 4e2fc38695b52731aa941faafee99df47508cb93
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
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
          <PageTabs /> 
          <Sidebar />
        </div>
      </Router>
    </ApolloProvider>


    
  );
}

export default App;



