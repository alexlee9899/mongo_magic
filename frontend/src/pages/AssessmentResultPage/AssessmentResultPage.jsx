import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from 'antd'
import styled from 'styled-components';
import { Button } from 'antd';
import { Parallax } from 'react-parallax';
import { getResult } from '../../utils/requests';

const TopNavContainer = styled.div`
display: flex;
width: 100%;
height: 200px;
align-items: center;
justify-content: space-around;
`

const ContentContainer = styled.div`
display: flex;
`

const ResultCardContainer = styled.div`
    display: flex;
    /* flex-direction: column; */
    height: 1000px;
    width: 900px;
    background: hsla(0,0%,100%,.95);
    margin-top: 100px;
    margin-bottom: 200px;
    border-radius: 10px;
`

const ContentContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    min-width: 100%;
    margin: auto;
`

const ContentContainerLeft = styled.div`
    background-color: green;
    height: 600px;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    margin: auto;
`


const AssessmentResultPage = () => {
    const { id } = useParams();
    const { Content } = Layout

    const themeColor_light = '#89c5d1';

    useEffect(() => {
        getResult(id).then(res => {
            if (res.status === 200){
                res.json().then(data=>{
                    console.log(data);
                })
            }
        })
    }, []);

    const tempData = {
        "score": "99",
        "co2": "1500",
        "natural_habitat": "500",
        "roughly_size": "20",
        "suggestion": {
            "Location Location Location": [
                "One or more of your offices only have limited access to the public transport system",
                "One or more of your offices are located in a state which has a high percentage of electircity generation from fossil fuels"],
            "Reduce, reuse, recycle": [
                "You may need to consider go forward with LED lighting in your offices",
                "Your data centre may need a passive cooling system in order to reduce the energy consumption"
            ],
            "Go cloud, go greens": [
                "A physical data centre is not the best place to store your data and servers, considering a cloud solution",
                "You may consider to increase the percentage of renewable sources in your electricity bill"
            ],
            "Get certified, get ahead": [
                "You may consider to get certified for your offices with Green Star Rating",
                "You may consider to get certified for your data centre with NABERS"
            ]
        }
    }

    console.log(id);
    return (
        <Parallax className='image' blur={0} bgImage={require('../../assets/banner1.jpg')} strength={800} bgImageStyle={{ minHeight: "100vh" }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ResultCardContainer>
                <ContentContainer>
                    <ContentContainerLeft>
                        <div style={{ height: '400px', width: '100%', backgroundColor: `${themeColor_light}` }}>Picture</div>
                        <p style={{ display: 'block', whiteSpace: 'normal', overflowWrap: 'break-word' }}>Your organisation's annual carbon footprint is kdafjkla ddnagh kdlfjajhbc dafsjhfa fjaj</p>
                    </ContentContainerLeft>
                    <ContentContainerRight>

                    </ContentContainerRight>
                </ContentContainer>
            </ResultCardContainer>
        </Parallax>
    )
}

export default AssessmentResultPage