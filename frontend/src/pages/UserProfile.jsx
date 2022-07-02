import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';


export default function UserProfile() {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("id");
    const [user, setUser] = React.useState(null);

    const getProfile = () => fetch (`http://127.0.0.1:5000/users/profile`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + localStorage.getItem('userToken')
            },
        Bearer: localStorage.getItem('userToken')
}).then(res => res.json())
    .then(data => {
        if (data) {
            setUser(data);
        }
    }
    )

    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            getProfile();
        }
    }, [])

    return (
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

