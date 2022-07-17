import React, { useEffect } from 'react';
import { checkToken } from '../utils/functions';

const LoginChecker = () => {
    useEffect(() => {
        checkToken();
    }, []);

    return (
        <></>
    )
}
export default LoginChecker;