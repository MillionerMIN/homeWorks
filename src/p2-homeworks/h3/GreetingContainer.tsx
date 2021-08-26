import React, { useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any 
        if (e.currentTarget.value !== '')
            setName(e.currentTarget.value)
        setError('')
        // need to fix
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (error !== '') {
            setError('');
        }
        if (e.charCode === 13) {
            addUser()
        }

    }

    const addUser = () => {
        if (name !== '') {
            alert(`Hello  ${name}!`);
            addUserCallback(name);
            setName('');
        } else {
            setError('write to name please!!!')
        }
        // need to fix
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            keyPress={onKeyPress}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
