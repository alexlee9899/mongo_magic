import backend_url from "../config/api";
import { message } from 'antd';

const apiRequest = async({method=undefined, url, body=undefined}) => {
    const requestOptions = {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
        body: body ? JSON.stringify(body) : undefined
    };
    try{
        console.log((requestOptions));
        const response = await fetch (`${backend_url}${url}`, requestOptions);
        return response;
    } catch (error){
        return error;
    }
}

export default apiRequest;

// export const userLogout = (url='users/logout') => {
//     const res = apiRequest({url: url});
//     return res;
// }

export const userLogout = () => {
    localStorage.removeItem('userToken');
    window.location.href = "/login";
}

export const getProfile = (url='/users/profile')  => {
    const res = apiRequest({url: url});
    return res;
}

export const updateProfile = (body) => {
    const res = apiRequest({method:'PATCH',url:'/users/update_profile', body:body});
    return res;
}