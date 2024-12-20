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

const Results = () => {
    const [results, setResults] = useState({});

    return (
        <>
                <Content style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <ResultsContainer>
                        {results ?
                            (   <span style={{ fontSize:'20px' }}>
                                        No Result,
                                    <a href='/assessment' style= {{ color:`${themeColor}` }}> Get Tested Now >></a>
                                </span>
                            )
                            :
                            (<h1>Result Content</h1>)}
                    </ResultsContainer>
                </Content>
        </>
    );
}

export default Results;