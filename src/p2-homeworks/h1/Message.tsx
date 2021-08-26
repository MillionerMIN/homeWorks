import React from 'react'
import style from './Message.module.css';
import {MessagePropsType} from './HW1';

function Message (props: MessagePropsType)  {
    return (
        <div className={style.messages}>
            <img  src={props.avatar} alt="avatar" className={style.avatar}/>
            <div className={style.angel}></div>
            <div className={style.content}>
                <div className={style.name}>{props.name}</div>
                    <div className={style.text}>{props.message}</div>
                    <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
