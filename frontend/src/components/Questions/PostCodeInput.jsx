import React from 'react';
import { Input, Spin } from 'antd';
import { isAustralianPostCode } from '../../utils/functions';
import { LoadingOutlined } from '@ant-design/icons';
import { australianPostCode } from '../../utils/requests';
import './QuestionStyle.css'

const PostCodeInput = (props) => {
    const [isValid, setIsValid] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [location, setLocation] = React.useState(null);

    const inputOnchange = (e) => {
        setIsValid(isAustralianPostCode(e));
        setValue(e);
        if (isAustralianPostCode(e)){
            australianPostCode(e).then(res => {
                if (res.ok){
                    res.json().then(
                        data => {
                            let city = ''
                            if (data?.postalCodes[0]?.adminName1){
                                setLocation({
                                    state: data.postalCodes[0].adminName1
                                })
                                props.setAnswer({...props.answer, [props.qId]: e});
                            } else {
                                setLocation(void 0);
                                setIsValid(false);
                                console.log('Invalid Post Code');                            
                            }
                        }
                    )
                }
            }
            )
        }   else {
            setLocation(null);
        }
    }
    console.log(location);

    const inputStatus = () => {
        if (!isValid && value.toString().length === 4) {
            return 'error';
        }
        return '';
    }
 

    return (
        <div className='questionContainer'>
            <div style={{ width:'100%', height:'20px', order:'0' }}>PostCode (Australian, 4 digits):
            <div style={{ width:'100% ', order:'1', flexDirection:'row', marginTop:'10px' }}>
            <Input maxLength={4} status = {inputStatus()} onChange={(e) => inputOnchange(e.target.value)} style={{ width: '100px', height:'25px', marginRight:'10px'}}></Input>
                    { (!location) && isValid && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/>}
                    { (location) && `${location.state}`}
                    { (location === void 0) && <>Location not found, Check your PostCode </>}
                </div>
            </div> 
        </div>
    )
}

export default PostCodeInput;
