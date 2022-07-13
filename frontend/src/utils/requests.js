import backend_url from "../config/api";
import { message } from "antd";

export const getProfile = async() =>{
    try{
        const response = await fetch  (`${backend_url}/users/profile`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('userToken')
                },
            Bearer: localStorage.getItem('userToken')
        });
        if (response.ok){
        const data = await response.json();
        return data;
        } else {
            const responseContent = (
                <>
                    <h>Please Login</h>
                    <br></br>
                    <h>Redirecting...</h>
                </>
            );
            message.error(responseContent, 2)
            .then(() => {
                window.location.href = "/login";
            });
        }
    } catch (error){
        const responseContent = (
            <>
                <h>Please Login</h>
                <br></br>
                <h>Redirecting...</h>
            </>
        );
        message.error(responseContent, 2)
        .then(() => {
            window.location.href = "/login";
        });
    }
    return null;
}