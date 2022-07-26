import React, { useState, useEffect } from 'react';
import './QuestionForm.css';
import { Divider, Collapse, Button } from 'antd';
import { getQuestionList } from '../../utils/requests';
import Question from '../Questions/Question';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import { usePreviousProps } from '@mui/utils';
import { MinusSquareOutlined } from '@ant-design/icons';


export const QuestionContext = React.createContext();

const { Panel } = Collapse;

const QuestionForm = (props) => {
    const [postCode, setPostCode] = useState(void 0);
    const [questionList, setQuestionList] = useState(void 0);
    const [questionRender, setQuestionRender] = useState([]);
    const [answer, setAnswer] = useState({});
    const [questionUnfinished, setQuestionUnfinished] = useState([]);
    const [isLastForm, setIsLastForm] = useState(true);
    const [collapse, setCollapse] = useState(void 0);
    const officeNumber = props.number;

    const providerAnswer = React.useMemo(() => ({ answer, setAnswer, questionUnfinished, setQuestionUnfinished }), [answer, setAnswer, setQuestionUnfinished]);

    useEffect(() => {
        QuestionListRender({...props.qList});
        setCollapse(props.collapseNumber);
    }, [props.officeList]);

    useEffect(() => {
        if (questionUnfinished.length === 0 && questionRender.length > 0){
            props.assessmentSetter(prev => ({...prev, [props.number]: answer}));
        };
        if (questionUnfinished.length > 0 && questionRender.length > 0){
            props.assessmentSetter(prev => {
                const copy = {...prev};
                delete copy[props.number];
                return copy;
            });
        }
    }, [questionUnfinished]);


    const sortQuestions = (data) => {
        const qList = [];
        for (const key in data) {
            if (JSON.stringify(data[key].depend) === '{}') {    
                qList.push(data[key]);
                delete (data[key]);
            }
        }
        while (Object.keys(data).length > 0) {
            upperloop: for (const key in data) {
                for (const keyArray in qList) {
                    if (qList[keyArray]._id === data[key]?.depend.q_id) {
                        qList.splice(parseInt(keyArray)+1, 0, data[key]);
                        delete (data[key]);
                        break upperloop;
                    }
                }
            }
        } 
        return new Promise((resolve) => {
            resolve(qList);
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
            <Divider plain>Office {props.number}</Divider>
            <Collapse onChange={collapseChange} activeKey={collapse} accordion={true} bordered={true} ghost={true}>
            <Panel key={props.number}>
            <QuestionContext.Provider value={providerAnswer}>
                {
                    (postCode) ? (<></>) :
                        <div>
                            { questionRender}
                        </div>
                }
            </QuestionContext.Provider>
            <div className='finishContainer' style={{marginLeft:'20px'}}>
                {
                (questionUnfinished.length === 0 && questionRender.length > 0 ) ? 
                <></>
                :
                (
                <>Please Finish Questions Above</>
                )
                }
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