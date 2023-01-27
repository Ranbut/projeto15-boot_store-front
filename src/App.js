import AuthProvider from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import { GlobalStyle } from "./globalStyles";
import SignUp from "./components/SignUp";
import Home from "./components/Home/Home.js";
import Cart from "./components/Cart";
import Checkout from './components/Checkout/Checkout.js'
import Search from "./components/Search/Search.js";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
     </>
    )
}