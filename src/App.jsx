import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import NewPost from "./components/NewPost";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
        <div className="nav-bottom">
          <Nav />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
