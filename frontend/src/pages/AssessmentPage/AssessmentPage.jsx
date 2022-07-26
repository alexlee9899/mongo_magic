import React, { useEffect, useState } from 'react';
import { Button, Divider } from 'antd';
import styled from 'styled-components';
import themeColor from '../../config/theme';
import { getQuestionList } from '../../utils/requests'
import AssessmentStepBar from '../../components/AssessmentStepBar/AssessmentStepBar';
import QuestionForm from '../../components/QuestionForm/QuestionForm';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { PlusSquareOutlined } from '@ant-design/icons';
import LoadingIcon from '../../components/LoadingIcon';
import './AssessmentPage.css';



const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-width: 500px;
    min-height: 100vh;
    overflow: auto;
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
    min-height: 100vh;
    /* overflow-y: auto; */
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
    // const [counter, setCounter] = useState(0);
    const [collapseNumber, setCollapseNumber] = useState(1);

    useEffect(() => {
        getQuestionList().then(res => {
            if (res.ok) {
                res.json().then(
                    data => {
                        setQuestionList(data.question_list);
                        setOfficeList(['1'])
                    }
                )
            }
        })
    }, []);


    useEffect(() => {
        console.log(assessmentAnswer);
    }, [assessmentAnswer]);

    const officeAdder = () => {
        setOfficeList(prev => ([...prev, `${officeNumber + 1}`]));
        setCollapseNumber(collapseNumber + 1);
        setOfficeNumber(officeNumber + 1);
    }

    const reMoveLastOffice = () => {
        const curNumber = officeList.length;
        setOfficeNumber(officeNumber - 1);
        setCollapseNumber(collapseNumber - 1);
        if (curNumber > 1) {
            setOfficeList(prev => prev.slice(0, curNumber - 1));
            setOfficeNumber(officeNumber - 1);
            setAssessmentAnswer(prev => {
                const newAnswer = { ...prev };
                delete newAnswer[`${curNumber}`];
                return newAnswer;
            })
        }
    }

    const timeOut = (ms) => {
        setTimeout(() => {
            return true;
        }, ms);
        return true;
    }

    return (
        <PageContainer>
            {(questionList?.length > 0) ? (
                <><NavContainer>
                    <h1>Navbar</h1>
                    <h1>Navbar</h1>
                    <h1>Navbar</h1>
                </NavContainer>
                    <HeaderContainer>
                        <h3 className='headerContent'>The Assessment of the sustainability score will be done based on the data provided.</h3>
                        <h3 className='headerContent'>G'Tracker will not store or share your data with anyone without your permission.</h3>
                    </HeaderContainer>
                    <StepContainer style={{ marginTop: '20px', width: '50%' }}>
                        <AssessmentStepBar />
                    </StepContainer>
                    {(questionList?.length > 0) ?
                        (<QuestionContainer>
                            {/* <QuestionForm number={officeNumber}></QuestionForm> */}
                            {officeList.map((office) =>
                                <QuestionForm key={`office${office}`} collapseNumber={collapseNumber} officeList={officeList} number={parseInt(office)} assessmentSetter={setAssessmentAnswer} qList={questionList} ></QuestionForm>
                            )
                            }
                        </QuestionContainer>) : <></>
                    }
                    <div style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center' }}>
                        <div>
                            {<Button style={{ alignItems: 'flex-start' }} onClick={officeAdder}>Add Another Office</Button>}
                            {officeList.length > 1 && <Button style={{ alignItems: 'flex-start' }} onClick={reMoveLastOffice}>Remove Last Office</Button>}
                        </div>
                        <Divider plain>{(Object.keys(assessmentAnswer)?.length === officeList?.length) ? `All Answered, Submit Now` : `Please Finish All Questions`}</Divider>
                    </div>
                </>) : <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}><LoadingIcon /></div>}
        </PageContainer>
    )
}
export default AssessmentPage;