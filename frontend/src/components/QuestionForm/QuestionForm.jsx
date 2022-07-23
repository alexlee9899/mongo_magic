import React, { useState, useEffect } from 'react';
import './QuestionForm.css';
import { Divider } from 'antd';
import { getQuestionList } from '../../utils/requests';
import Question from '../Questions/Question';

export const QuestionContext = React.createContext();

const QuestionForm = (props) => {
    const [postCode, setPostCode] = useState(void 0);
    const [location, setLocation] = useState(void 0);
    const [questionList, setQuestionList] = useState(void 0);
    const [questionRender, setQuestionRender] = useState([]);
    const [answer, setAnswer] = useState({});
    let questionRenders = [];

    const providerAnswer = React.useMemo(() => ({answer, setAnswer}) , [answer, setAnswer]);

    useEffect(() => {
        getQuestionList().then(res => {
            if (res.ok) {
                res.json().then(
                    data => {
                        setQuestionList(data);
                        QuestionListRender(data.question_list);
                    }
                )
            }
        }
        )
    }, []);

    const QuestionListRender = (data) => {
        setQuestionRender(Object.values(data).map((question) =>
            <Question key={question._id} question={question} setAnswer={setAnswer} answer={answer}></Question>
        ))
    }
    console.log(answer);

    return (
        <div className='questionFormContainer'>
            <QuestionContext.Provider value={providerAnswer}>
                <Divider plain>Office {props.number}</Divider>
                {
                    (postCode) ? (<></>) :
                        <div>
                            {questionRender}
                        </div>
                }
            </QuestionContext.Provider>
        </div>
    )
}

export default QuestionForm