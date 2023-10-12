import { Route, Router, Routes } from "react-router-dom";
import CardList from "./components/CardList/CardList";
import Message from "./components/Message/Message";
import Search from "./components/Search/Search";
import TopBar from "./components/TopBar/TopBar";
import Home from "./components/home/Home";
import "./style.css";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/CardList" element={<CardList />} />
        <Route path="/Login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
