import { Popover, Steps } from 'antd';
import React from 'react';
import './AssessmentStepBar.css';
import '../../pages/AssessmentPage/AssessmentPage.css';

const { Step } = Steps;


const AssessmentStepBar = (props) => {
    return (
        <Steps current={1} size='small'>
            <Step title="INFORMATION"  />
            <Step title="Privacy & More"  />
            <Step title="Report" />
        </Steps>
    )
}

export default AssessmentStepBar;