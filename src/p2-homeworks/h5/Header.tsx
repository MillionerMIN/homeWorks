import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

function Header() {
  const [open, setOpen] = useState<boolean>(true);
  const close = () => setOpen(false);
  return (
    <>
      <nav className={open ? `${s.menu} ${s.nav} ` : `${s.none} ${s.nav}`}>
        <div className={s.wrapper}>
          <NavLink
            to="/pre-junior"
            className={s.link}
            activeClassName={s.active}
            onClick={close}
          >
            PreJunior
          </NavLink>
          <NavLink
            to="/junior"
            className={s.link}
            activeClassName={s.active}
            onClick={close}
          >
            Junior
          </NavLink>
          <NavLink
            to="/juniorPlus"
            className={s.link}
            activeClassName={s.active}
            onClick={close}
          >
            Junior
          </NavLink>
        </div>

        <FaArrowAltCircleLeft
          onClick={() => {
            setOpen(!open);
          }}
          className={!open ? s.turn : s.turn_180}
        />
      </nav>
    </>
  );
}

export default Header;
