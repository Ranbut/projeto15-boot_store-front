import GlobalStyle from "./assets/GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart.js'
import Login from './components/Login.js'
import Home from "./components/Home/Home.js";

export default function App(){
  return(
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" />
      </Routes>
    </BrowserRouter>
  </>
  )
}