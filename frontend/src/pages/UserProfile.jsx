import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { message } from 'antd';

message.config({
    maxCount: 1,
})

export default function UserProfile() {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("id");
    const [user, setUser] = React.useState(null);

    const getProfile = async() =>{
        try{
            const response = await fetch  (`http://127.0.0.1:5000/users/profile`,{
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
                message.error("Error: " + response.statusText, 2);
            }
        } catch (error){
            console.log("Error: " + error);
        }
    }


    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            getProfile();
        }
        console.log('once');
    }, [])

    return (
        /**
         * Render user profile if there is a valid token
         */
        (user !== null) ?
        (<div>
            <h1>User Profile</h1>
            <p>Name: {user.fullname}</p>
            <p>Email: {user.email}</p>
            <p>Org: {user.org}</p>
            <p>Photo</p>
        </div>)
        :
        (   
            (localStorage.getItem('userToken') !== null) ?
            (<div>
                <h1>Loading...</h1>
            </div>):
            (<div>
                <h1>Login First</h1>
                </div>)
        )
    )
}

