import React, { useEffect } from "react";
import styled from 'styled-components';
import Image404 from "../assets/404.png";
import backToHome from "../assets/404BackToHomeBtn.png";
import { removeNavbar } from "../utils/functions";

const ImageContainer = styled.img`
    display: block;
    justify-content: center;
    align-items: center;
    height: 25vh;
    width: 30vw;
    margin: 20vh auto 10vh auto;
    min-height: 200px;
    min-width: 300px;
`;

const Text404 = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 150%;

    text-align: center;
    letter-spacing: 0.05em;

    color: #222222;
`

const TextDescription = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 10px;
    text-align: center;
    letter-spacing: 0.02em;

    color: #94959B;
`

const BackToHomeBtn = styled.img`
    &:hover{
        cursor: pointer;
    }
    display: block;
    justify-content: center;
    align-items: center;
    margin: 5vh auto 10vh auto;
    min-height: 50px;
    min-width: 100px;
`
const goHome = (e) => {
    window.location.href = "/";
}

export default function NotFound() {
    useEffect(() => {
        removeNavbar();
    }, []);

    return (
        <div style={{ background: '#F6F6F6', height: '100%', width: '100%', textAlign: 'center', justifyContent: 'center', alignContent: '' }}>
            <ImageContainer src={Image404} />
            <Text404>404 Not Found</Text404>
            <TextDescription>Oops! It seems like the page you are looking for is not available! </TextDescription>
            <TextDescription>Please try again with another page or go back to home.</TextDescription>
            <BackToHomeBtn onClick={() => goHome()} className='back_home' src={backToHome} />
        </div>
    );
}