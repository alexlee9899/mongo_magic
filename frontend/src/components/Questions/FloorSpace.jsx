import React, { useState } from 'react';
import { Input } from 'antd';

const FloorSpace = () => {
    const [value, setValue] = useState();

    const checkForm = (e) =>{
        if (!isNaN(e.target.value)){
            setValue(e.target.value);
        }
    }

    return (
        <div class='questionContainer'>
        <div style={{ width:'100%', height:'20px', order:'0' }}>2. What is the floor space of your office? </div> 
            <div style={{ width:'100% ', order:'1', flexDirection:'row', marginTop:'10px' }}>
                <Input onChange={(e) => checkForm(e)} value={value} style={{ width: '100px', height:'25px', marginRight:'10px'}}></Input> <>m<sup>2</sup></>
            </div>
        </div>
    )
}

export default FloorSpace