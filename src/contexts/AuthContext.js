import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider ({ children }) {
    const [jwt, setJWT] = useState("");

    return (
        <AuthContext.Provider value={{jwt, setJWT}}>
            {children}
        </AuthContext.Provider>
    )
}