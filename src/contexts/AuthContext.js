import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider ({ children }) {
    const [token, setToken] = useState("");
    const [price, setPrice] = useState(0);
    const [items, setItems] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    return (
        <AuthContext.Provider value={{token, setToken, price, setPrice, items, setItems, userInfo, setUserInfo}}>
            {children}
        </AuthContext.Provider>
    )
}