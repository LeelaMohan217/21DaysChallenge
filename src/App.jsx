import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Challenges from "./pages/Challenges";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateChallenge from "./pages/CreateChallenge";
import SingleChallenge from "./pages/SingleChallenge";
import UpdateChallenge from "./pages/UpdateChallenge";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/challenges" element={<Challenges userData={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/create-challenge"
            element={<CreateChallenge userData={user} />}
          />
          <Route path="/challenge/:id" element={<SingleChallenge />} />
          <Route path="/update-challenge/:id" element={<UpdateChallenge />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
