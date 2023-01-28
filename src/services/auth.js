import axios from "axios";

export const REACT_APP_API_URL = "http://localhost:5000";

export function signUpPost(formInfo){
    const promise = axios.post(`${REACT_APP_API_URL}/signup`, ({ ...formInfo }));
    return promise;
};

export function signInPost(formInfo){
    const promise = axios.post(`${REACT_APP_API_URL}/signin`, ({ ...formInfo }));
    return promise;
}