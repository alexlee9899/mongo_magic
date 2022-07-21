import { message } from 'antd';
import { getProfile } from './requests'

export function removeNavbar() {
    const navbar = document.getElementById("Dashboard_sider");
    if (navbar) {
        navbar.parentNode.removeChild(navbar);
    }
}

export function fileToDataUrl(file) {
    const validFileTypes = ['image/jpeg', 'image/png', 'image/jpg']
    const valid = validFileTypes.find(type => type === file.type);
    // Bad data, let's walk away.
    if (!valid) {
        throw Error('provided file is not a png, jpg or jpeg image.');
    }

    const reader = new FileReader();
    const dataUrlPromise = new Promise((resolve, reject) => {
        reader.onerror = reject;
        reader.onload = () => resolve(reader.result);
    });
    reader.readAsDataURL(file);
    return dataUrlPromise;
}

export function checkToken() {
    const responseContent = (
        <>
            <h>Please Login</h>
            <br></br>
            <h>Redirecting...</h>
        </>
    );
    if (!localStorage.getItem('userToken')) {
        message.error(responseContent, 0.1)
            .then(() => {
                window.location.href = "/login";
            });
    } 
    else {
        getProfile().then(res => {
            if (!res.ok) {
                message.error(responseContent, 0.1)
                    .then(() => {
                        window.location.href = "/login";
                    });
            }
        })
    }
}

export const asyncLocalStorage = {
    setItem: async (key, value) =>{
        await Promise.resolve();
        return localStorage.setItem(key, value);
    },
    getItem: async(key) =>{
        await Promise.resolve();
        return localStorage.getItem(key);
    }
};

export const isAustralianPostCode = (postcode) => {
    const myRegEx = new RegExp('^(0[289][0-9]{2})|([123456789][0-9]{3})$');
    return myRegEx.test(postcode);
}