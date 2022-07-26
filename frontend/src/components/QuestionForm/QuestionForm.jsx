import React, { useState, useEffect } from 'react';
import './QuestionForm.css';
import { Divider, Collapse, Button, Typography } from 'antd';
import { getQuestionList } from '../../utils/requests';
import Question from '../Questions/Question';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import { usePreviousProps } from '@mui/utils';
import { MinusSquareOutlined } from '@ant-design/icons';
import useItems from 'antd/lib/menu/hooks/useItems';


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

    console.log(answer);

    useEffect(() => {
        switch (props.type){
            case 'office':
                if (props.officeList?.length === props.number){
                    setIsLastForm(true);
                }   else {
                    setIsLastForm(false);
                }   break;
            case 'data':
                if (props.dataCenterList?.length === props.number){
                    setIsLastForm(true);
                }
                else {
                    setIsLastForm(false);
                }
                break;
        }
    }, [props.officeList, props.dataCenterList]);

    const removeLast = () => {
        props.setRemover(true);
    }


    const sortQuestions = (data) => {
        const qList = [];
        const officeQuestions = data;
        // extract questions with no dependency
        for (const key in officeQuestions) {
            if (JSON.stringify(officeQuestions[key].depend) === '{}') {    
                qList.push(officeQuestions[key]);
                delete (officeQuestions[key]);
            }
        }
        // add questions to list based on dependencies
        while (Object.keys(officeQuestions).length > 0) {
            upperloop: for (const key in officeQuestions) {
                for (const keyArray in qList) {
                    if (qList[keyArray]._id === officeQuestions[key]?.depend.q_id) {
                        qList.splice(parseInt(keyArray)+1, 0, officeQuestions[key]);
                        delete (officeQuestions[key]);
                        break upperloop;
                    }
                }
            }
        } 
        return new Promise((resolve) => { 
            switch (props.type){
                case 'office':
                    resolve(qList.filter( q=> q.title === '1'));
                    break;
                case 'dataCenter':
                    resolve(qList.filter( q=> q.title === '2'));
                    break;
            }
        });
    }

    const collapseChange = () => {
        if (collapse !== props.number) {
            setCollapse(props.number);
        }   else  {
            setCollapse(void 0);
        }
    }

    const QuestionListRender = async(data) => {
        const sortedData = await sortQuestions(data);
        setQuestionRender(sortedData.map((question) =>
            <Question key={question._id} question={question} setAnswer={setAnswer} answer={answer}></Question>
        ))
    }


    return (
        <>
        <div className='questionFormContainer'>
            <Divider plain>
                {
                    props.type === 'office' ?
                    <>Office </> : <>Data Center </>
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