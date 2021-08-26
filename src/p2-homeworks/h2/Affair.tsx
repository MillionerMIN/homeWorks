import React from 'react'
import { AffairType } from './HW2';
import s from './Affairs.module.css';
import iconD from '../../icons/delete.png';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const { name, priority } = props.affair
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.wrapper}>
            <div>{name}</div>
            <div>{priority}</div>

            <button className={s.delete} onClick={deleteCallback}><img src={iconD} alt="delete"/></button>
        </div>
    )
}

export default Affair
