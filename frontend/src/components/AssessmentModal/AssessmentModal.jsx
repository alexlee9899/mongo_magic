import React, { useState } from 'react'
import { Modal, Button } from 'antd'

const AssessmentModal = (props) => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(props.hasSavedAssessment);
    const [abortLoading, setAbortLoading] =useState(false);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
            props.usingSavedSetter(true);
        }, 300);
    };

    const handleAbort = () => {
        setAbortLoading(true);
        setTimeout(() => {
            setAbortLoading(false);
            setVisible(false);
            props.setLoading(false);
            props.usingSavedSetter(false);
        }, 300);
    }

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <Modal
            centered = {true}
            maskClosable={false}
            visible={visible}
            width={'300px'}
            closable={false}
            title="Reminder"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" loading={abortLoading} onClick={handleAbort}>
                    Abort
                </Button>,
                <Button key="submit" type="primary"  loading={loading} onClick={handleOk}>
                    Continue
                </Button>,
            ]}
            style={{ textAlign:'center', minWidth:'350px', top:'-20vh' }}
        >
            <p>You have saved assessments</p>
        </Modal>
    )
}

export default AssessmentModal;