import axios from "axios";

export const REACT_APP_API_URL = "https://projeto15-boot-store-back.onrender.com";

export function signUpPost(formInfo){
    const promise = axios.post(`${REACT_APP_API_URL}/signup`, ({ ...formInfo }));
    return promise;
};

export function signInPost(formInfo){
    const promise = axios.post(`${REACT_APP_API_URL}/signin`, ({ ...formInfo }));
    return promise;
}