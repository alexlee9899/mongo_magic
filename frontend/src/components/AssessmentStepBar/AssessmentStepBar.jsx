import { Popover, Steps } from 'antd';
import React from 'react';
import './AssessmentStepBar.css';
import '../../pages/AssessmentPage/AssessmentPage.css';

const { Step } = Steps;

const AssessmentStepBar = (props) => {

    const onStepChange = (e) => {
        props.setStep(e);
    }

    return (
        <Steps current={props.step} onChange={onStepChange} size='small'>
            <Step title="Office"  />
            <Step title="Additional Info"/>
            <Step title="Privacy & More"  />
            <Step title="Report" />
        </Steps>
    )
}

export default AssessmentStepBar;