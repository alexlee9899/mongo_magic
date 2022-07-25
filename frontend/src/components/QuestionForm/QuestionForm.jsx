import React, { useState, useEffect } from 'react';
import './QuestionForm.css';
import { Divider, Collapse, Button } from 'antd';
import { getQuestionList } from '../../utils/requests';
import Question from '../Questions/Question';
import { usePreviousProps } from '@mui/utils';

export const QuestionContext = React.createContext();

const { Panel } = Collapse;

const QuestionForm = (props) => {
    const [postCode, setPostCode] = useState(void 0);
    const [questionList, setQuestionList] = useState(void 0);
    const [questionRender, setQuestionRender] = useState([]);
    const [answer, setAnswer] = useState({});
    const [questionUnfinished, setQuestionUnfinished] = useState([]);
    const [isLastForm, setIsLastForm] = useState(true);
    const officeNumber = props.nubmer;

    const providerAnswer = React.useMemo(() => ({ answer, setAnswer, questionUnfinished, setQuestionUnfinished }), [answer, setAnswer, setQuestionUnfinished]);

    useEffect(() => {
        QuestionListRender({...props.qList});
    }, [props]);

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
            <Collapse defaultActiveKey={props.number} accordion={true} bordered={true} ghost={true}>
            <Panel key={props.number}>
            <QuestionContext.Provider value={providerAnswer}>
                {
                    (postCode) ? (<></>) :
                        <div>
                            {questionRender}
                        </div>
                }
            </QuestionContext.Provider>
            <div className='finishContainer'>
                {
                (questionUnfinished.length === 0 && questionRender.length > 0 ) ? 
                isLastForm
                :
                (
                <>Please Finish Questions Above</>
                )
                }
            </div>
            </Panel>
            </Collapse>
        </div>
        </>
    )
}


export default QuestionForm;    