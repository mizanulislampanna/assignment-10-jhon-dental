// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Shared/Header/Header";
import Login from "./Components/Pages/Login/Login";
import PageNotFound from "./Components/Shared/PageNotFound/PageNotFound";
import Register from "./Components/Pages/Register/Register";
import ServiceDetail from "./Components/Pages/ServiceDetail/ServiceDetail";
import ServicePage from "./Components/Pages/ServicePage/ServicePage";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";
import ProccedCheckout from "./Components/Pages/ProccedCheckout/ProccedCheckout";
import Complete from "./Components/Pages/ProccedCheckout/Complete";
import About from "./Components/Pages/About/About";
import Blogs from "./Components/Pages/Blogs/Blogs";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/Services" element={<ServicePage></ServicePage>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <ProccedCheckout></ProccedCheckout>
            </RequireAuth>
          }
        ></Route>
        <Route path="complete" element={<Complete></Complete>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
