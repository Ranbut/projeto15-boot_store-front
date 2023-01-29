import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider ({ children }) {
    const [token, setToken] = useState("");
    const [price, setPrice] = useState(0);
    const [userInfo, setUserInfo] = useState([]);
    const [produtosCarrosel, setProdutos] = useState([]);

    return (
        <AuthContext.Provider value={{token, setToken, price, setPrice,  userInfo, setUserInfo, produtosCarrosel, setProdutos}}>
            {children}
        </AuthContext.Provider>
    )
}