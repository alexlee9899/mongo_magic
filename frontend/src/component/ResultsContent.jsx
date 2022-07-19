import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from 'antd';
import themeColor from "../config/theme";

const { Content } = Layout;

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
`

const ResultsContent = () => {
    const [results, setResults] = useState({});

    return (
        <>
            {/* <Navbar  page='Results'></Navbar> */}
                <Content style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <ResultsContainer>
                        {results ?
                            (   <span style={{ fontSize:'20px' }}>
                                        No Result,
                                    <a style= {{ color:`${themeColor}` }}> Get Tested Now >></a>
                                </span>
                            )
                            :
                            (<h1>Result Content</h1>)}
                    </ResultsContainer>
                </Content>
        </>
    );
}

export default ResultsContent;