import React, { useEffect, useState } from 'react';
import { Button, Divider, Row, Col, Checkbox } from 'antd';
import styled from 'styled-components';
import themeColor from '../../config/theme';
import { getQuestionList } from '../../utils/requests'
import AssessmentStepBar from '../../components/AssessmentStepBar/AssessmentStepBar';
import QuestionForm from '../../components/QuestionForm/QuestionForm';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { PlusSquareOutlined, CaretRightOutlined, CaretLeftOutlined, CaretLeftFilled } from '@ant-design/icons';
import LoadingIcon from '../../components/LoadingIcon';
import './AssessmentPage.css';
import { listClasses } from '@mui/material';
import { GroupContext } from 'antd/lib/checkbox/Group';



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
    min-height: 70vh;
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
    // everything for office
    const [questionList, setQuestionList] = useState(undefined);
    const [officeNumber, setOfficeNumber] = useState(1);
    const [officeList, setOfficeList] = useState([]);
    const [assessmentAnswer, setAssessmentAnswer] = useState({});
    const [collapseNumber, setCollapseNumber] = useState(1);

    const [pageStep, setPageStep] = useState(0);
    const [dataCenterNumber, setDataCenterNumber] = useState(1);
    const [dataCenterCollapseNumber, setDataCenterCollapseNumber] = useState(1);
    const [dataCenterList, setDataCenterList] = useState([]);

    const [officeFinished, setOfficeFinished] = useState(false);
    const [dataCenterFinished, setDataCenterFinished] = useState(false);

    const [remover, setRemover] = useState(false);

    console.log(assessmentAnswer);
    useEffect(() => {
        getQuestionList().then(res => {
            if (res.ok) {
                res.json().then(
                    data => {
                        setQuestionList(data.question_list);
                        setOfficeList(['1']);
                        setDataCenterList(['1']);
                        console.log(data.question_list);
                    }
                )
            }
        })
    }, []);



    useEffect(() => {
        if (assessmentAnswer[`office${officeNumber}`]) {
            setOfficeFinished(true);
        } else {
            setOfficeFinished(false);
        }
        if (assessmentAnswer[`data${dataCenterNumber}`]) {
            setDataCenterFinished(true);
        } else {
            setDataCenterFinished(false);
        }

    }, [assessmentAnswer]);

    useEffect(() => {
        if (remover) {
            setRemover(false)
            removeLastUnit();
        }
    }, [remover])


    const unitAdder = () => {
        switch (pageStep) {
            case 0:
                setOfficeList(prev => ([...prev, `${officeNumber + 1}`]));
                setCollapseNumber(collapseNumber + 1);
                setOfficeNumber(officeNumber + 1);
                break;
            case 1:
                setDataCenterList(prev => ([...prev, `${dataCenterNumber + 1}`]));
                setDataCenterCollapseNumber(dataCenterCollapseNumber + 1);
                setDataCenterNumber(dataCenterNumber + 1);
                break;
        }
    }

    const removeLastUnit = () => {
        switch (pageStep) {
            case 0:
                setOfficeNumber(officeNumber - 1);
                setCollapseNumber(collapseNumber - 1);
                if (officeList.length > 1) {
                    setOfficeList(prev => prev.slice(0, officeList.length - 1));
                    setOfficeNumber(officeNumber - 1);
                    setAssessmentAnswer(prev => {
                        const newAnswer = { ...prev };
                        delete newAnswer[`office${officeList.length}`];
                        return newAnswer;
                    })
                }
                break;
            case 1:
                setDataCenterNumber(dataCenterNumber - 1);
                setDataCenterCollapseNumber(dataCenterCollapseNumber - 1);
                if (dataCenterList.length > 1) {
                    setDataCenterList(prev => prev.slice(0, dataCenterList.length - 1));
                    setDataCenterNumber(dataCenterNumber - 1);
                    setAssessmentAnswer(prev => {
                        const newAnswer = { ...prev };
                        delete newAnswer[`dataCenter${dataCenterList.length}`];
                        return newAnswer;
                    })
                }
                break;
        }
    }

    const timeOut = (ms) => {
        setTimeout(() => {
            return true;
        }, ms);
        return true;
    }

    const goNextPage = () => {
        setPageStep(prev => prev + 1);
    }

    const goPrevPage = () => {
        setPageStep(prev => prev - 1);
    }

    console.log(pageStep, officeFinished, dataCenterFinished);
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
                        <AssessmentStepBar step={pageStep} setStep={setPageStep} officeFinished={officeFinished} datacenterFinished={dataCenterFinished} />
                    </StepContainer>
                    {(questionList?.length > 0) ?
                        (<QuestionContainer style={{ minHeight: pageStep === 1 ? '30vh' : '' }}>
                            {
                                (pageStep === 0) ?
                                    <>{officeList.map((office) =>
                                        <QuestionForm type={'office'} setRemover={setRemover} key={`office${office}`} collapseNumber={collapseNumber} officeList={officeList} number={parseInt(office)} assessmentSetter={setAssessmentAnswer} assessment={assessmentAnswer} qList={questionList} ></QuestionForm>
                                    )}</> :
                                    (pageStep === 1) ?
                                        <>
                                            {dataCenterList.map((dataCenter) =>
                                                <QuestionForm type={'dataCenter'} setRemover={setRemover} key={`Data Center${dataCenter}`} collapseNumber={dataCenterCollapseNumber} officeList={dataCenterList} number={parseInt(dataCenter)} assessmentSetter={setAssessmentAnswer} assessment={assessmentAnswer} qList={questionList} ></QuestionForm>
                                            )}
                                        </> :
                                        (pageStep === 2) ?
                                            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                                                <Row>
                                                    <Col span={8}>
                                                        <Checkbox value="A">dafkljadklsjfklasjfklasdjklfjasdkljflkdaafsd</Checkbox>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={8}>
                                                        <Checkbox value="A">zxcvmljzvjlsdajkfl;kjkav</Checkbox>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={8}>
                                                        <Checkbox value="A">fasdfasdlgjalksjfaksljaksd</Checkbox>
                                                    </Col>
                                                </Row>
                                                </div> : <>page4</>
                            }

                                            </QuestionContainer>) : <></>
                    }
                            <div style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center' }}>
                                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    {<div onClick={goPrevPage} style={{ visibility: `${pageStep > 0 ? '' : 'hidden'}`, cursor: 'pointer', display: 'flex', textAlign: 'center', alignItems: 'center', order: '0', fontSize: '16px' }}>
                                        <CaretLeftFilled style={{ fontSize: '20px' }}></CaretLeftFilled> Prev
                                    </div>}
                                    <div style={{ display: 'flex', order: '1', width: '80%', justifyContent: 'center' }}>
                                        {<Button style={{ marginRight: '10px' }} onClick={unitAdder}>{pageStep === 0 ? <>Add Another Office</> : <>Add Another Data Center</>}</Button>}
                                        {/* {<Button disabled={pageStep===0 ? officeList.length=== 1 : dataCenterList.length === 1} style={{ alignItems: 'flex-start', order:'2' }} onClick={removeLastUnit}>{pageStep === 0 ? <>Remove Last Office</> : <>Remove Last Data Center</>}</Button>} */}
                                    </div>
                                    <div onClick={pageStep === 0 ? officeFinished ? goNextPage : null : pageStep === 1 ? dataCenterFinished ? goNextPage : null : null} style={{
                                        opacity: `${pageStep === 0 ? officeFinished ? '1' : '0.2' : dataCenterFinished ? '1' : '0.2'}`,
                                        order: '2', fontSize: '16px', cursor: `${pageStep === 0 ? officeFinished ? 'pointer' : 'not-allowed' : pageStep === 1 ? dataCenterFinished ? 'pointer' : 'not-allowed' : ''}`, zIndex: '500'
                                    }}>
                                        Next<CaretRightOutlined></CaretRightOutlined>
                                    </div>
                                </div>
                                {
                                    pageStep === 0 ? (
                                        <Divider plain>{officeFinished ? `All Answered, Go To Next Page Now` : `Please Finish All Questions`}</Divider>
                                    ) : (
                                        pageStep === 1 ? (
                                            <Divider plain>{dataCenterFinished ? `All Answered, Go To Next Page Now` : `Please Finish All Questions`}</Divider>
                                        ) : (
                                            <></>
                                        )
                                    )
                                }
                            </div>
                        </>) : <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}><LoadingIcon /></div>}
                </PageContainer>
            )
}
            export default AssessmentPage;