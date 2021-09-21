import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { FaArrowAltCircleLeft} from 'react-icons/fa';

function Header() {
    const [active, setActive] = useState<boolean>(false)
    const toggle = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }
    return (
        <>
            <div
                onClick={() => toggle()}
            >
                <div className={active ? s.container : s.container_none}>
                    <NavLink to="/pre-junior"
                        className={s.link}
                        activeClassName={s.active}
                    >PreJunior</NavLink>
                    <NavLink to="/junior"
                        className={s.link}
                        activeClassName={s.active}
                    >Junior</NavLink >
                    <NavLink to="/juniorPlus"
                        className={s.link}
                        activeClassName={s.active}
                    >Junior</NavLink >
                </div >
                <span><FaArrowAltCircleLeft className={!active ? s.turn : s.turn_180}/></span>
            </div>
        </>
    )
}

export default Header
