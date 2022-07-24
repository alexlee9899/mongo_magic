import './QuestionStyle.css';
import React from 'react';
import PostCodeInput from './PostCodeInput';
import { Input, Radio, Checkbox, Col, Row } from 'antd';
import { QuestionContext } from '../QuestionForm/QuestionForm';
import { CheckOutlined } from '@ant-design/icons';

const Question = (props) => {
    const qType = props.question.question_type;
    const mutiable = props.question.mutiable;
    const qContent = props.question.content;
    const qDepend = props.question.depend;
    // console.log(qType, qContent, qDependent);
    const ans = React.useContext(QuestionContext);

    // console.log(qDepend.q_id in ans.answer && ans.answer[qDepend.q_id] === qDepend.q_option);
    // console.log(JSON.stringify(qDepend) === '{}');

    React.useEffect(() => {
        // if ( !(JSON.stringify(qDepend) === '{}' && qDepend.q_id in ans.answer && ans.answer[qDepend.q_id] === qDepend.q_option )){
        //     delete ans.answer[props.question._id];
        // }
        // if (JSON.stringify(qDepend) !=== '{}' && !qDepend.q_id in ans.answer &&
        if (JSON.stringify(ans.answer[props.question._id]) === '{}') {
            delete ans.answer[props.question._id];
        };
        if (JSON.stringify(qDepend) !== '{}' && (ans.answer[qDepend.q_id] !== qDepend.q_option)) {
            delete ans.answer[props.question._id];
        };
        if (props.question._id === '62dbbf7fe82cdd10987ecd1e'){
            // console.log(qDepend.q_id);
            // console.log(ans.answer);
            // console.log(JSON.stringify(qDepend) !== '{}' );
            // console.log(!qDepend.q_id in ans.answer);
            // console.log(ans.answer[qDepend.q_id] !== qDepend.q_option);
            console.log(ans.answer[props.question._id]);
        }
    }, [ans]);

    const unitContext = (props) => {
        switch (props.question.unit) {
            case 'm2':
                return (<>m<sup>2</sup></>);
            default:
                return (<>{props.question.unit}</>);
        }
    }

    const FinishSign = () => {
        return (
            <div style={{ width: '20px', height: '20px', marginTop:'5px' }}>
                {(ans?.answer[props.question._id]?.length > 0) ? (<CheckOutlined key={props.q_id} style={{ color: 'green', display: 'flex' }}></CheckOutlined>) : (<></>)}
            </div>
        )
    }
    
    const renderSwitch = () => {
        switch (qType) {
            case '0':
                return (
                    <div key={props.question._id} className='questionContainer' style={{ marginBottom: '66px' }}>
                        {FinishSign()}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {qContent}
                            <Radio.Group onChange={(e) => ans.setAnswer({ ...ans.answer, [props.question._id]: e.target.value })} value={ans.answer[props.question._id]}>
                                <Radio value={'true'} style={{ marginRight: '10px' }}>Yes</Radio>
                                <Radio value={'false'} style={{ marginRight: '10px' }}>No</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                );
            case '1':
                return (
                    <div key={props.question._id} className='questionContainer'>
                        {FinishSign()}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {qContent}
                            <Checkbox.Group style={{ width: '100% ' }} onChange={onMultiChange}>
                                <Row>
                                    {multiOption()}
                                </Row>
                            </Checkbox.Group>
                        </div>
                    </div>
                );
            case '2':
                return (
                    <div key={props.question._id} className='questionContainer'>
                        {FinishSign()}
                        <div style={{ width: '100%', height: '20px', order: '0' }}>{qContent}
                            <div style={{ width: '100% ', order: '1', flexDirection: 'row', marginTop: '10px' }}>
                                <Input value={ans.answer[props.question._id]} onChange={onInputChange} style={{ width: '100px', height: '25px', marginRight: '10px' }}></Input>
                                {unitContext(props)}
                            </div>
                        </div>
                    </div>
                )
        }
    }

    const onMultiChange = (e) => {
        ans.setAnswer({ ...ans.answer, [props.question._id]: e });
    }

    const onInputChange = (e) => {
        if (!isNaN(e.target.value)) {
            ans.setAnswer({ ...ans.answer, [props.question._id]: e.target.value });
        } else {
            ans.setAnswer({ ...ans.answer, [props.question._id]: '' });
        }
    }

    const multiOption = () => {
        return (
            props.question.option.map((option) =>
                <Col span={8}>
                    <Checkbox value={option} key={option}>{option}</Checkbox>
                </Col>
            )
        )
    }

    return (
        <>
            {
                (props.question._id === '62d7eb8720b23a61a4656ec2') ?
                    (
                        <div className='questionContainer'>
                            {FinishSign()}
                            <PostCodeInput style={{ order: '0' }} answer={props.answer} setAnswer={props.setAnswer} qId={props.question._id}></PostCodeInput>
                        </div>
                    )
                    :
                    (
                        (JSON.stringify(qDepend) === '{}' || qDepend.q_id in ans.answer && ans.answer[qDepend.q_id] === qDepend.q_option) && [renderSwitch()]
                    )
            }
        </>
    )
}

export default Question