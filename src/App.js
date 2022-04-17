// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Shared/Header/Header";
import About from "./Components/Pages/About/About";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
