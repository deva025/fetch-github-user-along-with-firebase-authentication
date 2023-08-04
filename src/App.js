import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./layout/footer";

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router,  Route, Link,Routes } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import { initializeApp } from 'firebase/app';
import "firebase/auth";
import firebaseConfig from "./confi/Fircons";

//components
import Home from "./pages/Home";
import Pagen from "./pages/Pagenotfounf";
import Sign from "./pages/Signin";
import Signup from "./pages/Signup";
import { UserContext } from "./context/Ucontex";
import Header from "./layout/header";



 initializeApp(firebaseConfig);
const App = () => {
  const [user, SetUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, SetUser }}>
        <Header />
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/Signin" element={<Sign />} />
          <Route  path="/Signup" element={<Signup/>} />
          <Route  path="*" element={<Pagen/>} />
        </Routes>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
