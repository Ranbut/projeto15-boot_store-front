import AuthProvider from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import { GlobalStyle } from "./globalStyles";
import SignUp from "./components/SignUp";
import Home from "./components/Home/Home.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
     </>
    )
}
