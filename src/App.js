import AuthProvider from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import { GlobalStyle } from "./globalStyles";
import SignUp from "./components/SignUp";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
