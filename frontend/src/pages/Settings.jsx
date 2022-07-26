import React from "react";
import { getQuestionList } from '../utils/requests';

const Settings = () => {
    React.useEffect(() => {
        getQuestionList().then(res => {
            if (res.ok) {
                res.json().then(
                    data => {
                        console.log(data)
                    }
                )
            }
        })
    }, []);

    return (
        <>
        {/* <Navbar  page='Settings'></Navbar> */}
    </>
    );
}

export default Settings;