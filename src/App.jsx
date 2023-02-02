import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/newPost.css";
import Feed from "./components/Feed";
import NewPost from "./components/NewPost";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="app">
      <BrowserRouter>
        <Header auth={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {isLoggedIn && <Nav />}
      </BrowserRouter>
    </div>
  );
}

export default App;
