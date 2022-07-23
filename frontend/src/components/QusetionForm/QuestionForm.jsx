import React, { useState, useEffect } from 'react';
import './QuestionForm.css';
import { Divider } from 'antd';
import PostCodeInput from '../Questions/PostCodeInput';
import FloorSpace from '../Questions/FloorSpace';
import { getQuestionList } from '../../utils/requests';
import Question from '../Questions/Question';


const QuestionForm = (props) => {
    const [postCode, setPostCode] = useState(void 0);
    const [location, setLocation] = useState(void 0);
    const [questionList, setQuestionList] = useState(void 0);
    const [questionRender, setQuestionRender] = useState([]);
    const [answer, setAnswer] = useState({});
    let questionRenders = [];

    useEffect (() => {
        getQuestionList().then(res => {
            if (res.ok){
                res.json().then(
                    data => {
                        setQuestionList(data);
                        QuestionListRender(data.question_list);
                        console.log(data);
                    }
                )
            }
        }
        )
    },[]);

    const QuestionListRender = (data) => {
        setQuestionRender(Object.values(data).map((question) => 
            <Question key={question._id} question={question} setAnswer={setAnswer} answer={answer}></Question>
            ))
    }

    console.log(questionRender);

    return (
    <div className='questionFormContainer'>
        <Divider plain>Office {props.number}</Divider>
        {
        (postCode) ?  (<></>): 
            <div>
                {questionRender}
            </div>
        }
    </div>
    )
}

export default QuestionForm