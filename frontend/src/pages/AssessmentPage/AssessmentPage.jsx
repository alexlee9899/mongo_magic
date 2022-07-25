import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import themeColor from '../../config/theme';
import { getQuestionList } from '../../utils/requests'
import AssessmentStepBar from '../../components/AssessmentStepBar/AssessmentStepBar';
import QuestionForm from '../../components/QuestionForm/QuestionForm';
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
    const [officeList, setOfficeList] = useState([]);
    const [assessmentAnswer, setAssessmentAnswer] = useState({});

    console.log(assessmentAnswer);

    useEffect(() =>{
        getQuestionList().then(res => {
            if (res.ok) {
                res.json().then(
                    data => {
                        setQuestionList(data.question_list);
                        setOfficeList([<QuestionForm key={`office1`} number={1} assessmentSetter={setAssessmentAnswer} qList={data.question_list}></QuestionForm>])
                    }
                )
            }
        })
    }, []);

    const officeAdder = () => {
        const curNumber = officeList.length;
        setOfficeList(prev=>([...prev, <QuestionForm key={`office${curNumber+1}`} assessmentSetter={setAssessmentAnswer} qList={questionList} number={curNumber+1}> </QuestionForm>]));
    }
    // console.log(Object.keys(assessmentAnswer)?.length , officeList.length);
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
            {   (questionList?. length > 0) ? 
                (<QuestionContainer>
                    {/* <QuestionForm number={officeNumber}></QuestionForm> */}
                    {officeList}
                </QuestionContainer>) : <></>
            }
            <Button onClick={officeAdder}>Add Another Office</Button>
            {   (Object.keys(assessmentAnswer)?.length === officeList?.length) ? <>All Answered, Submit Now</> : <>Please Finish All Questions</>}
        </PageContainer>
    )
}
export default AssessmentPage;