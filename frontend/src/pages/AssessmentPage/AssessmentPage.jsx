import React, { useEffect, useState, createContext, useMemo } from 'react';
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

export const SaveButton = createContext();

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
    const [questionListOffice, setQuestionListOffice] = useState(undefined);
    const [questionListDataCenter, setQuestionListDataCenter] = useState(undefined);
    const [officeNumber, setOfficeNumber] = useState(1);
    const [officeList, setOfficeList] = useState([]);
    const [assessmentAnswer, setAssessmentAnswer] = useState({});
    const [collapseNumber, setCollapseNumber] = useState(1);

    const [pageStep, setPageStep] = useState(0);
    const [datacentreNumber, setdatacentreNumber] = useState(1);
    const [datacentreCollapseNumber, setdatacentreCollapseNumber] = useState(1);
    const [datacentreList, setdatacentreList] = useState([]);

    const [officeFinished, setOfficeFinished] = useState(false);
    const [datacentreFinished, setdatacentreFinished] = useState(false);

    const [remover, setRemover] = useState(false);

    const [saving, setSaving] = useState(false);

    const [hasNoDatacentre, setHasNoDatacentre] = useState(false);

    const saveButton = useMemo(() =>({saving}), [saving]);


    // to test save function
    const [notSaved, setNotSaved] = useState(true);

    useEffect(() => {
        if (notSaved){
        getQuestionList().then(res => {
            if (res.ok) {
                res.json().then(
                    data => {
                        handleQuestionList(data.question_list);
                        setOfficeList(['1']);
                        setdatacentreList(['1']);
                    }
                )
            }
        })
    }   else {
        // for saved assessment
        // getQuestionList().then(res => {
        //     if (res.ok) {
        //         res.json().then(
        //             data => {
        //                 // get data
        //                 handleQuestionList(data.question_list);
        //             }
        //         )
        //     }
        // }
        // )
        // setAssessmentAnswer(testSample);
        // // get forms data
        // setOfficeList(Object.keys(testSample).filter(item => item.substring(0,6) === 'office').map(item => item.substring(6,item.length)));
        // setdatacentreList(Object.keys(testSample).filter(item => item.substring(0,4) === 'data').map(item => item.substring(4,item.length)));
        // setOfficeNumber(Object.keys(testSample).filter(item => item.substring(0,6) === 'office').length);
        // setdatacentreNumber(Object.keys(testSample).filter(item => item.substring(0,4) === 'data').length);
        // setCollapseNumber(Object.keys(testSample).filter(item => item.substring(0,6) === 'office').length);
        // setdatacentreCollapseNumber(Object.keys(testSample).filter(item => item.substring(0,4) === 'data').length);
    }
    }, []);
    console.log(assessmentAnswer);

    useEffect(() => {
        let officeUnfinishFlag = false;
        let dataCentreUnfinishFlag = false;
        const eleOffice = Object.keys(assessmentAnswer).filter(ele => ele.substring(0,6) === 'office');
        const eleData = Object.keys(assessmentAnswer).filter(ele => ele.substring(0,4) === 'data');
        for (const office of eleOffice) {
            for (const officeAns in assessmentAnswer[`${office}`]){
                if (assessmentAnswer[`${office}`][officeAns]?.length === 0){
                    officeUnfinishFlag = true;
                }
            }
        }
        for (const data of eleData){
            for (const dataAns in assessmentAnswer[`${data}`]){
                if (assessmentAnswer[`${data}`][dataAns]?.length === 0){
                    dataCentreUnfinishFlag = true;
                }
            }
        }
        if (assessmentAnswer[`office${officeList.length}`] && officeUnfinishFlag === false) {
            setOfficeFinished(true);
        } else {
            setOfficeFinished(false);
        }
        if (assessmentAnswer[`data${datacentreList.length}`] && dataCentreUnfinishFlag === false) {
            setdatacentreFinished(true);
        } else {
            setdatacentreFinished(false);
        }
        // if (pageStep === 0 && notSaved === false) {
        //     setCollapseNumber(Object.keys(assessmentAnswer).filter(item => item.substring(0,6) === 'office').map(item => item.substring(6,item.length)).length);
        // }
        // else if (pageStep === 1 && notSaved === false){
        //     setdatacentreCollapseNumber(Object.keys(assessmentAnswer).filter(item => item.substring(0,4) === 'data').map(item => item.substring(4,item.length)).length);
        // }
    }, [assessmentAnswer, setAssessmentAnswer]);

    // useEffect(() => {
    //     if (pageStep === 0) {
    //         setCollapseNumber(Object.keys(testSample).filter(item => item.substring(0,6) === 'office').map(item => item.substring(6,item.length)).length);
    //     }
    //     else if (pageStep === 1){
    //         setdatacentreCollapseNumber(Object.keys(testSample).filter(item => item.substring(0,4) === 'data').map(item => item.substring(4,item.length)).length);
    //     }
    // }, [officeList, datacentreList, pageStep]);

    useEffect(() => {
        if (remover) {
            setRemover(false)
            removeLastUnit();
        }
    }, [remover])


    const unitAdder = () => {
        switch (pageStep) {
            case 1:
                setdatacentreList(prev => ([...prev, `${datacentreNumber + 1}`]));
                setdatacentreCollapseNumber(datacentreCollapseNumber + 1);
                setdatacentreNumber(datacentreNumber + 1);
                break;
            default:
                setOfficeList(prev => ([...prev, `${officeNumber + 1}`]));
                setCollapseNumber(collapseNumber + 1);
                setOfficeNumber(officeNumber + 1);
                break;
        }
    }

    const removeLastUnit = () => {
        switch (pageStep) {
            case 1:
                setdatacentreNumber(datacentreNumber - 1);
                setdatacentreCollapseNumber(datacentreCollapseNumber - 1);
                if (datacentreList.length > 1) {
                    setdatacentreList(prev => prev.slice(0, datacentreList.length - 1));
                    setdatacentreNumber(datacentreNumber - 1);
                    setAssessmentAnswer(prev => {
                        const newAnswer = { ...prev };
                        delete newAnswer[`dataCentre${datacentreList.length}`];
                        return newAnswer;
                    })
                }
                break;
            default:
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
        }
    }

    const handleQuestionList = (data) => {
        const officeList = [];
        const datacentreList = [];
        let thisDepend = [];
        for (const key in data) {
            switch (data[key].title){
                case '2':
                    datacentreList.push(data[key]);
                    delete (data[key]);
                    break;
                default:
                    officeList.push(data[key]);
                    delete (data[key]);
                    break;
            }
        }
        while (Object.keys(data).length > 0){
            for (const oIndex in officeList) {
                for (const dataIndex in data) {
                    thisDepend = [];
                    if (data[dataIndex]?.depend.q_id === officeList[oIndex]?.q_id) {
                        thisDepend.push(data[dataIndex]);
                        delete (data[dataIndex]);
                    }
                }
                officeList.splice(parseInt(oIndex)+1, 0, ...thisDepend);
            }
            for (const dcIndex in datacentreList) {
                for (const dataIndex in data) {
                    thisDepend = [];
                    if (data[dataIndex]?.depend.q_id === datacentreList[dcIndex]?.q_id) {
                        thisDepend.push(data[dataIndex]);
                        delete (data[dataIndex]);
                    }
                }
                datacentreList.splice(parseInt(dcIndex)+1, 0, ...thisDepend);
            }
        }
        setQuestionListOffice(officeList);
        setQuestionListDataCenter(datacentreList);
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

    const savePage = () => {
        setSaving(true);
        console.log(assessmentAnswer);
    }

    return (
        <PageContainer>
            {(pageStep === 0 && questionListOffice?.length > 0) || (pageStep === 1 && questionListDataCenter?.length > 0) || (pageStep === 2) || (pageStep === 3)  ? (
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
                        <AssessmentStepBar step={pageStep} setStep={setPageStep} officeFinished={officeFinished} datacentreFinished={datacentreFinished} />
                    </StepContainer>
                    <SaveButton.Provider value={saving}>
                    {(pageStep === 0 && questionListOffice?.length > 0) || (pageStep === 1 && questionListDataCenter?.length > 0) || (pageStep === 2) || (pageStep === 3)  ?
                        (
                        <QuestionContainer style={{ minHeight: pageStep === 1 ? '30vh' : '' }}>
                            {   
                                (pageStep === 0) ?
                                    <>{officeList.map((office) =>
                                        <QuestionForm type={'office'} setRemover={setRemover} key={`office${office}`} collapseNumber={collapseNumber} officeList={officeList} number={parseInt(office)} assessmentSetter={setAssessmentAnswer} assessment={assessmentAnswer} qList={questionListOffice}></QuestionForm>
                                    )}</> :
                                    (pageStep === 1) ?
                                        <>
                                            {datacentreList.map((datacentre) =>
                                                <QuestionForm type={'datacentre'} setRemover={setRemover} key={`Data Centre${datacentre}`} collapseNumber={datacentreCollapseNumber} datacentreList={datacentreList} number={parseInt(datacentre)} assessmentSetter={setAssessmentAnswer} assessment={assessmentAnswer} qList={questionListDataCenter}></QuestionForm>
                                            )}
                                        </> :
                                        (pageStep === 2) ?
                                            <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                                                <Row>
                                                    <Col span={8}>
                                                        <Checkbox >dafkljadklsjfklasjfklasdjklfjasdkljflkdaafsd</Checkbox>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={8}>
                                                        <Checkbox >zxcvmljzvjlsdajkfl;kjkav</Checkbox>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={8}>
                                                        <Checkbox >fasdfasdlgjalksjfaksljaksd</Checkbox>
                                                    </Col>
                                                </Row>
                                                </div> : <>page4</>
                            }

                                            </QuestionContainer>) : <></>
                    }
                    </SaveButton.Provider>
                            <div style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center' }}>
                                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    {<div onClick={goPrevPage} style={{ visibility: `${pageStep > 0 ? '' : 'hidden'}`, cursor: 'pointer', display: 'flex', textAlign: 'center', alignItems: 'center', order: '0', fontSize: '16px' }}>
                                        <CaretLeftFilled style={{ fontSize: '20px' }}></CaretLeftFilled> Prev
                                    </div>}
                                    <div style={{ display: 'flex', order: '1', width: '80%', justifyContent: 'center' }}>
                                        {<Button style={{ marginRight: '10px' }} onClick={unitAdder}>{pageStep === 0 ? <>Add Another Office</> : <>Add Another Data Centre</>}</Button>}
                                        {/* {<Button disabled={pageStep===0 ? officeList.length=== 1 : datacentreList.length === 1} style={{ alignItems: 'flex-start', order:'2' }} onClick={removeLastUnit}>{pageStep === 0 ? <>Remove Last Office</> : <>Remove Last Data Center</>}</Button>} */}
                                    </div>
                                    <div onClick={pageStep === 0 ? officeFinished ? goNextPage : null : pageStep === 1 ? datacentreFinished ? goNextPage : null : null} style={{
                                        opacity: `${pageStep === 0 ? officeFinished ? '1' : '0.2' : datacentreFinished ? '1' : '0.2'}`,
                                        order: '2', fontSize: '16px', cursor: `${pageStep === 0 ? officeFinished ? 'pointer' : 'not-allowed' : pageStep === 1 ? datacentreFinished ? 'pointer' : 'not-allowed' : ''}`, zIndex: '500'
                                    }}>
                                        Next<CaretRightOutlined></CaretRightOutlined>
                                    </div>
                                    <Button onClick={()=>savePage()}>save</Button>
                                </div>
                                {
                                    pageStep === 0 ? (
                                        <Divider plain>{officeFinished ? `All Answered, Add More or Go Ahead` : `Please Finish All Questions`}</Divider>
                                    ) : (
                                        pageStep === 1 ? (
                                            <Divider plain>{datacentreFinished ? `All Answered, Add More or Go Ahead` : `Please Finish All Questions`}</Divider>
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