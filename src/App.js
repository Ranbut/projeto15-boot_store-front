import AuthProvider from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import { GlobalStyle } from "./globalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}