import "./App.css";

import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/" element={<SignIn></SignIn>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
