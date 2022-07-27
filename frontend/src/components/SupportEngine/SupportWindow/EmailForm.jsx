import React, { useState } from "react"

import { styles } from "../styles"

import { LoadingOutlined } from '@ant-design/icons'

import Avatar from '../Avatar'

import sendMail from "../../../utils/sendMail"

import { Button, message } from 'antd'
import { style } from "@mui/system"

const EmailForm = props => {    
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    return (
        <div 
            style={{
                ...styles.emailFormWindow,
                ...{ 
                    height: props.visible ? '100%' : '0px',
                    opacity: props.visible ? '1' : '0'
                }
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />
            </div>

            <div 
                className='transition-5'
                style={{
                    ...styles.loadingDiv,
                    ...{ 
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '0.33' : '0',
                    }
                }}
            />
            <LoadingOutlined
                className='transition-5'
                style={{
                    ...styles.loadingIcon,
                    ...{ 
                        zIndex: loading ? '10' : '-1',
                        opacity: loading ? '1' : '0',
                        fontSize: '82px',
                        top: 'calc(50% - 41px)', 
                        left: 'calc(50% - 41px)',  
                    }
                }}
            />

            <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                <Avatar 
                    style={{ 
                        position: 'relative',
                        left: 'calc(50% - 44px)',
                        top: '10%',
                    }}
                />

                <div style={styles.topText}>
                    Welcome to the <br /> support team 👋
                </div>

                <form 
                    // onSubmit={e => handleSubmit(e)}
                    style={{ position: 'relative', width: '100%', top: '19.75%' }}
                >
                    <input 
                        placeholder='Your Email'
                        onChange={e => setEmail(e.target.value)}
                        style={styles.emailInput}
                    />
                    <input 
                        placeholder='Description'
                        onChange={e => setContent(e.target.value)}
                        style={{...styles.emailInput, marginTop:'30px', height:'100px'}}
                    />
                    <br/>
                    <Button onClick={() => sendMail(email, content)} style={{ marginTop:'15px', borderColor:'#4D7393', borderRadius:'12px'}}>
                        Send
                    </Button>
                </form>
                
                
            </div>
        </div>
    )
}

export default EmailForm;