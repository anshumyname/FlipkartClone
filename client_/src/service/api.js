import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateSignUp = async (user) => {
    try {
        return await axios.post(`${url}/signup`,user);
    }catch(error){
        console.log("Error while calling signup api", error)
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`,user );
    }catch(error){
        console.log("Error while calling login auth api ", error.message);
    }
}

export const api = () => {
    
}