import React, { useEffect } from 'react';
import { checkToken } from '../utils/functions';

export default function LoginChecker() {

    useEffect(() => {
        checkToken();
    }, []);

    return (
        <></>
    )
}
