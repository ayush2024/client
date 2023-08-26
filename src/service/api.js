
import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${url}/signup`, data)
    } catch (error) {
        console.log('Error while calling Signup API: ', data);
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${url}/login`, data)
    } catch (error) {
        console.log('Error while calling login API: ', data);
        return error.response;
    }
}

export const payUsingPaytm = async (data) =>{
    try{
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    }catch(error){
        console.log("Error while calling api", error);
    }
}