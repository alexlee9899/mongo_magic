import React from "react";
import { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { message } from 'antd';
import Dashboard from "./Dashboard";
import backend_url from "../config/api";

message.config({
    maxCount: 1,
})

export default function Profile() {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("id");
    const [user, setUser] = React.useState(null);

    const getProfile = async() =>{
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
            setUser(data); 
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
    }


    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            getProfile();
        }
    }, [])

    return (
        /**
         * Render user profile if there is a valid token
         */
        // (user !== null) ?
        // (<div>
        //     <h1>User Profile</h1>
        //     <p>Name: {user.fullname}</p>
        //     <p>Email: {user.email}</p>
        //     <p>Org: {user.org}</p>
        //     <p>Photo</p>
        // </div>)
        // :
        // (   
        //     (localStorage.getItem('userToken') !== null) ?
        //     (<div>
        //         <h1>Loading...</h1>
        //     </div>):
        //     (<div>
        //         <h1>Login First</h1>
        //         </div>)
        // )
        <Dashboard page='Profile'></Dashboard>
    )
}

