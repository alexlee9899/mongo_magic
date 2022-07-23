import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import themeColor from '../../config/theme';
import { getQuestionList } from '../../utils/requests'
import AssessmentStepBar from '../../components/AssessmentStepBar/AssessmentStepBar';
import QuestionForm from '../../components/QusetionForm/QuestionForm';
import './AssessmentPage.css';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: 500px;
    min-height: 600px;
    /* overflow: auto; */
`
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 120px;
    `

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    width: 100%;
    height: 200px;
    /* background-color: ${themeColor}; */
    justify-content: center;
    align-items: center;
`

const QuestionContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
const StepContainer = styled.div`
    display: flex;
    width: 100%;
`

const HeaderTitle = styled.h1`
    font-size: 50px;

`

const HeaderText = styled.h3`
    font-size: 18px;
    color: grey;
`

const AssessmentPage = () => {
    const [questionList, setQuestionList] = useState(undefined);
    const [officeNumber, setOfficeNumber] = useState(1);

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


    return (
        <PageContainer>
            <NavContainer>
                <h1>Navbar</h1>
                <h1>Navbar</h1>
                <h1>Navbar</h1>
            </NavContainer>
            <HeaderContainer>
                <h3 className='headerContent'>The Assessment of the sustainability score will be done based on the data provided.</h3>
                <h3 className='headerContent'>G'Tracker will not store or share your data with anyone without your permission.</h3>
            </HeaderContainer>
            <StepContainer style={{ marginTop:'20px', width:'50%' }}>
                <AssessmentStepBar />
            </StepContainer>
            <QuestionContainer>
                <QuestionForm number={officeNumber}></QuestionForm>
            </QuestionContainer>
        </PageContainer>
    )
}
export default AssessmentPage;