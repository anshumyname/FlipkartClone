import axios from 'axios';

const url = '';

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

export const payUsingPaytm = async (data) => {
    try {
        let response =  await axios.post(`${url}/payment`, data);
        return response.data;

    }catch(error){
        console.log("error while calling paytm api", error);
    }
}

