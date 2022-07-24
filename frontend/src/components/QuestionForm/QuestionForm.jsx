import React, { useState, useEffect } from 'react';
import './QuestionForm.css';
import { Divider, Collapse, Button } from 'antd';
import { getQuestionList } from '../../utils/requests';
import Question from '../Questions/Question';

export const QuestionContext = React.createContext();

const { Panel } = Collapse;

const QuestionForm = (props) => {
    const [postCode, setPostCode] = useState(void 0);
    const [location, setLocation] = useState(void 0);
    const [questionList, setQuestionList] = useState(void 0);
    const [questionRender, setQuestionRender] = useState([]);
    const [answer, setAnswer] = useState({});
    const [questionUnfinished, setQuestionUnfinished] = useState([]);
    let questionRenders = [];

    const providerAnswer = React.useMemo(() => ({ answer, setAnswer, questionUnfinished, setQuestionUnfinished }), [answer, setAnswer, setQuestionUnfinished]);

    useEffect(() => {
        getQuestionList().then(res => {
            if (res.ok) {
                res.json().then(
                    data => {
                        QuestionListRender(data.question_list);
                    }
                )
            }
        }
        )
    }, [setQuestionList]);

    console.log(questionUnfinished);

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
    console.log(answer);

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
            </Panel>
            </Collapse>
        </div>
        </>
    )
}


export default QuestionForm;