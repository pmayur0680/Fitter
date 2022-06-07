import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { 
//   ApolloClient, 
//   ApolloProvider, 
//   InMemoryCache, 
//   createHttpLink, 
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Start from './pages/Start';
import Footer from './components/Footer';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Posts from './pages/Timeline'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Start />} 
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route 
            path="/signup" 
            element={<Signup />} 
          />
          <Route 
            path="/posts"
            element={<Posts />}
            />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
    
  );
}

export default App;
