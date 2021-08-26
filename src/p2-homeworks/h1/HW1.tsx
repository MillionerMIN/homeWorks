import React from 'react'
import Message from './Message';

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData = {
    avatar: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd44d538650505.598fa11957245.jpg',
    name: 'Doctor Strange',
    message: 'npm start нажимал? Ну естественно)))))',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr />
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr />
        </div>
    )
}

export default HW1
