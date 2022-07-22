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
                if (res.ok){
                    res.json().then(
                        data => {
                            let city = ''
                            if (data?.postalCodes[0]?.adminName1){
                                if (data.postalCodes[0].adminName2){
                                    city = data.postalCodes[0].adminName2.slice(0,1).toUpperCase() + data.postalCodes[0].adminName2.slice(1).toLowerCase();
                                }
                                setLocation({
                                    city: city,
                                    state: data.postalCodes[0].adminName1
                                })
                            } else {
                                setLocation(undefined);
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
        <div style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
            <div style={{ width:'220px' }}>PostCode (Australian, 4 digits): </div> 
            <Input maxLength={4} status = {inputStatus()} onChange={(e) => inputOnchange(e.target.value)} style={{ width: '100px', marginRight:'10px' }}></Input>
                <div style={{ display:'block', width:'350px ', textAlign:'left' }}>
                    { (!location) && isValid && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/>}
                    { (location) && <div>{location.city}, {location.state}</div>}
                    { (location === undefined) && <div>Location not found, Check your PostCode again</div>}
                </div>
        </div>
    )
}

export default PostCodeInput;
