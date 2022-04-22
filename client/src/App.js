import './App.css';
import Sidebar from './Components/Sidebar'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Addplanting from './Components/Addplanting/index';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";


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
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" component={Home} />
            </Routes>
          </div>
          <Sidebar />

          <motion.button
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 0.9 }}
              className="save-button"
              onClick={() => (modalOpen ? close() : open())}
            >
              Add Planting
          </motion.button>

          <main>
            <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
            >
              {modalOpen && <Addplanting modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
          </main>
        </div>
      </Router>
    </ApolloProvider>


    
  );
}

export default App;



