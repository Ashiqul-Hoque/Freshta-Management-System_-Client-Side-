import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddItem from "./Components/AddItem/AddItem";
import MyItem from "./Components/Myitems/MyItem";
import Blogs from "./Components/Blogs/blogs";
import Navbar from "./Components/Navbar/Navbar";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Footer from "./Components/Footer/Footer";
import Signin from "./Components/Signin/Signin";
import Register from "./Components/Register/Register";
import ManageItem from "./Components/ManageItem/ManageItem";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import SelectedItem from "./Components/SelectedItem/SelectedItem";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:id"
          element={<SelectedItem></SelectedItem>}
        ></Route>
        <Route
          path="/manageInventories"
          element={<ManageItem></ManageItem>}
        ></Route>
        <Route
          path="/addItem"
          element={
            <PrivateRoute>
              <AddItem></AddItem>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/myItem"
          element={
            <PrivateRoute>
              <MyItem></MyItem>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/signIn" element={<Signin></Signin>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
