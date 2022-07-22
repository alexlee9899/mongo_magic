import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import themeColor from '../config/theme';
import { getQuestionList } from '../utils/requests'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 200px;
`

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    background-color: ${themeColor};
    justify-content: center;
    align-items: center;
`

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const AssessmentPage = () => {
    const [questionList, setQuestionList] = useState(undefined);

    useEffect(() =>{
        getQuestionList().then(res => {
            if (res.ok) {
                res.json().then(
                    data => {
                        setQuestionList(data);
                    }
                )
            }
        })
    }, []);

    console.log(questionList);

    return (
        <PageContainer>
            <NavContainer>
                <h1>Navbar</h1>
                <h1>Navbar</h1>
                <h1>Navbar</h1>
            </NavContainer>
            <HeaderContainer>
                <h1>Header</h1>
            </HeaderContainer>
            <QuestionContainer>
                <h1>q1</h1>
                <h1>q2</h1>
                <h1>q3</h1>
                <h1>q4</h1>
                <h1>q5</h1>
            </QuestionContainer>
        </PageContainer>
    )
}
export default AssessmentPage;