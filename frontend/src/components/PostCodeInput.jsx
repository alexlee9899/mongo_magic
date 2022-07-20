import React from 'react';
import { Input, Spin } from 'antd';
import { isAustralianPostCode } from '../utils/functions';
import { LoadingOutlined } from '@ant-design/icons';
import { australianPostCode } from '../utils/requests';

const PostCodeInput = () => {
    const [isValid, setIsValid] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [location, setLocation] = React.useState(null);

    const inputOnchange = (e) => {
        setIsValid(isAustralianPostCode(e));
        setValue(e);
        if (isAustralianPostCode(e)){
            australianPostCode(e).then(res => {
                console.log(res);
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
        <>
            PostCode (Australian, 4 digits):  <Input maxLength={4} status = {inputStatus()} onChange={(e) => inputOnchange(e.target.value)} style={{ width: '100px', marginLeft:'10px' }}></Input>
            { (!location) && isValid && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/>}
            { location && <div>{location[0]}, {location[1]}</div>}
        </>
    )
}

export default PostCodeInput
