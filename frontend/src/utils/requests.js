import backend_url from "../config/api";
import { message } from 'antd';

const apiRequest = async ({ method = undefined, url, body = undefined }) => {
    const requestOptions = {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
        body: body ? JSON.stringify(body) : undefined,
    };
    try {
        console.log((requestOptions));
        const response = await fetch(`${backend_url}${url}`, requestOptions);
        return response;
    } catch (error) {
        return error;
    }
}

export default apiRequest;

export const userLogout = () => {
    localStorage.removeItem('userToken');
    window.location.href = "/login";
}

export const getProfile = (url = '/users/profile') => {
    const res = apiRequest({ url: url });
    return res;
}

export const updateProfile = (body) => {
    const res = apiRequest({ method: 'PATCH', url: '/users/update_profile', body: body });
    return res;
}

export const getQuestionList = (url = '/question/list') => {
    const res = apiRequest({ url: url });
    return res;
}

export const australianPostCode = async (postCode) => {
    const request = {
        method: 'GET',
    };
    try {
        // console.log(`https://secure.geonames.org/postalCodeSearch?postalcode=${postCode}&username=jinl9667&country=AU`);
        const response = await fetch(`https://secure.geonames.org/postalCodeSearchJSON?postalcode=${postCode}&username=jinl9667&country=AU`, request);
        return response;
    } catch (error) {
        return error;
    }
}

const australianPostCodeWithTimeout = (postCode, input, timeout = 5000) => {
    const controller = new AbortController();
    setTimeout(() => {
        controller.abort();
    }, timeout);
    const request = {
        method: 'GET',
        signal: controller.signal
    };
    return fetch(`https://secure.geonames.org/postalCodeSearchJSON?postalcode=${postCode}&username=jinl9667&country=AU`, request);
}

const wait = (timeout) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeout);
});

export const australianPostCodeWithRetry = async (postCode, timeout= 3000, retries = 3) => {
    let increasingTimeout = 2;
    let count = retries;

    while (count > 0) {
        try{
            return await australianPostCodeWithTimeout(postCode,`https://secure.geonames.org/postalCodeSearchJSON?postalcode=${postCode}&username=jinl9667&country=AU`, timeout);
        } catch (e) {
            if (e.name !== 'AbortError') throw e;
            count --;
            increasingTimeout = Math.pow(increasingTimeout, 2);
            console.warn(
                `Retrying in ${increasingTimeout}ms`,
                `${count} retries left`
            );
        };
        await wait(increasingTimeout);
    }

    return Promise.reject(new Error(`Failed after ${retries} retries`));
}



