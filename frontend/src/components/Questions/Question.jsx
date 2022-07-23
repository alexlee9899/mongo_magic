import './QuestionStyle.css';
import React from 'react';
import PostCodeInput from './PostCodeInput';
import { Input } from 'antd';

const Question = (props) => {
    const qType = props.question.question_type;
    const mutiable = props.question.mutiable;
    const qContent = props.question.content;
    const qDependent = props.question.depend;
    // console.log(qType, qContent, qDependent);

    React.useEffect(() => {

    }, []);

    const unitContext = (props) => {
        switch (props.question.unit) {
            case 'm2':
                return (<>m<sup>2</sup></>);
            default:
                return (<>{props.question.unit}</>);
        }
    }

    const renderSwitch = () => {
        switch (qType) {
            case '0':
                return (
                    <div key={props.question._id} className='questionContainer'>{qContent}
                            <div style={{ width: '100% ', order: '1', flexDirection: 'row', marginTop: '10px' }}>
                            </div>
                    </div>
                );
            case '1':
                return (
                    <div key={props.question._id} className='questionContainer'>{qContent}
                            <div style={{ width: '100% ', order: '1', flexDirection: 'row', marginTop: '10px' }}>
                            </div>
                    </div>
                );
            case '2':
                return (
                    <div key={props.question._id} className='questionContainer'>
                        <div style={{ width: '100%', height: '20px', order: '0' }}>{qContent}
                            <div style={{ width: '100% ', order: '1', flexDirection: 'row', marginTop: '10px' }}>
                                <Input style={{ width: '100px', height: '25px', marginRight: '10px' }}></Input> 
                                {unitContext(props)}
                            </div>
                        </div>
                    </div>
                )
        }
    }

    return (
        <>
            {
                (props.question._id === '62d7eb8720b23a61a4656ec2') ?
                    (<PostCodeInput answer={props.answer} setAnswer={props.setAnswer} qId={props.question._id}></PostCodeInput>) :
                    (
                        [renderSwitch()]
                    )
            }
        </>
    )
}

export default Question