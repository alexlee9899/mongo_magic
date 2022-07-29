import React, { useState, useEffect } from 'react';
import './QuestionForm.css';
import { Divider, Collapse, Typography } from 'antd';
import Question from '../Questions/Question';


export const QuestionContext = React.createContext();

const { Panel } = Collapse;
const { Text } = Typography;

const QuestionForm = (props) => {
    const [postCode, setPostCode] = useState(void 0);
    const [questionList, setQuestionList] = useState(void 0);
    const [questionRender, setQuestionRender] = useState([]);
    const [answer, setAnswer] = useState({});
    const [questionUnfinished, setQuestionUnfinished] = useState([]);
    const [isLastForm, setIsLastForm] = useState(true);
    const [collapse, setCollapse] = useState(void 0);
    const officeNumber = props.number;

    const [remove, setRemove] = useState(false);

    const providerAnswer = React.useMemo(() => ({ answer, setAnswer, questionUnfinished, setQuestionUnfinished }), [answer, setAnswer, setQuestionUnfinished]);


    useEffect(() => {
        QuestionListRender([...props.qList]);
        setCollapse(props.collapseNumber);
    }, [props.officeList]);

    useEffect(() => {
        QuestionListRender([...props.qList]);
        setCollapse(props.collapseNumber);
        if (props.number > 1 && props.type === 'datacentre') {
            setAnswer({ ...answer, ['62dff0a2dd0aaca7f9e83a86']: 'true' });
        }
    }, [props.datacentreList])

    useEffect(() => {
        const type = props.type === 'office' ? 'office' : 'data';
        if (questionUnfinished.length === 0 && questionRender.length > 0 ){
            props.assessmentSetter(prev => ({...prev, [`${type}${props.number}`]: answer}));
        };
        if (questionUnfinished.length > 0 && questionRender.length > 0){
            props.assessmentSetter(prev => {
                const copy = {...prev};
                delete copy[`${type}${props.number}`];
                return copy;
            });
        }
    }, [questionUnfinished]);

    useEffect(() => {
        const type = props.type === 'office' ? 'office' : 'data';
        if (props.assessment[`${type}${props.number}`]){
            setAnswer(props.assessment[`${type}${props.number}`]);
        }
    },[props.assessment])


    useEffect(() => {
        switch (props.type){
            case 'office':
                if (props.officeList?.length === props.number && props.number > 1){
                    setIsLastForm(true);
                }   else {
                    setIsLastForm(false);
                }   break;
            case 'datacentre':
                if (props.datacentreList?.length === props.number && props.number > 1){
                    setIsLastForm(true);
                }
                else {
                    setIsLastForm(false);
                }
                break;
        }
    }, [props.officeList, props.datacentreList]);

    const removeLast = () => {
        props.setRemover(true);
    }


    const collapseChange = () => {
        if (collapse !== props.number) {
            setCollapse(props.number);
        }   else  {
            setCollapse(void 0);
        }
    }

    const QuestionListRender = async(data) => {
        setQuestionRender(data.map((question) =>
            <Question key={question._id} question={question} setAnswer={setAnswer} answer={answer}></Question>
        ))
    }



    return (
        <>
        <div className='questionFormContainer'>
            <Divider plain>
                {
                    props.type === 'office' ?
                    <>Office </> : <>Data Centre </>
                }
            {props.number}</Divider>
            <Collapse onChange={collapseChange} activeKey={collapse} accordion={true} bordered={true} ghost={true}>
            <Panel key={props.number}>
            <QuestionContext.Provider value={providerAnswer}>
                {
                    (postCode) ? (<></>) :
                        <div>
                            { questionRender }
                        </div>
                }
            </QuestionContext.Provider>
            <div className='finishContainer' style={{marginLeft:'20px', flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                {
                (questionUnfinished.length === 0 && questionRender.length > 0 ) ? 
                <div style={{display:'flex', order:'0', flexDirection:'row', visibility:'hidden'}}>
                    {/* Please Finish Questions Above */}
                    </div>
                :
                (
                <div style={{display:'flex', order:'0', flexDirection:'row'}}>
                    {/* Please Finish Questions Above */}
                    </div>
                )
                }
                <div style={{ display:'flex', order:'1', flexDirection:'row', paddingRight:'10px', cursor:'pointer', zIndex:'300', justifySelf:'end'}}>
                    <Text className='removeButton' id='removeButton' onClick={isLastForm ? removeLast : ()=>{}} disabled={(!isLastForm) || (props.number === 1)} type='danger' underline>Remove</Text>
                </div>
                {/* {
                    officeNumber > 1 && (officeNumber ===  props.officeList?.length + 1) 
                    && 
                    <div onClick={RemoveThisForm} style={{ cursor:'pointer'}}>
                        <MinusSquareOutlined style={{ marginTop:'20px' }}></MinusSquareOutlined>
                        Remove this Office
                    </div>
                } */}
                {/* <div onClick={ ()=>console.log(officeNumber, props.officeList?.length)}>dafasdfasdfafasdfds</div> */}
            </div>
            </Panel>
            </Collapse>
        </div>
        </>
    )
}


export default QuestionForm;    