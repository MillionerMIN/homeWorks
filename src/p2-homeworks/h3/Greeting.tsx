import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    keyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, keyPress } // деструктуризация пропсов
) => {
    const inputClass = name !== '' ? '' : s.error// need to fix with (?:)
    // const btnDisabled = name !== '' ? false : true;

    return (
        <div className={s.container}>
            <div className={s.wrapperInput}>
                <input value={name} onChange={setNameCallback} onKeyPress={keyPress}  className={`${s.input} + ${inputClass}`} />
                <span>{error}</span>
            </div>
            <button className={s.btn}   onClick={addUser}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
