/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';

function App() {
  return (
    <NavBar>
     <NavItem icon={<BellIcon/>}/>
     <NavItem icon={<PlusIcon/>}/>
     <NavItem icon={<MessengerIcon/>}/>

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>


    </NavBar>
  );
}

function NavBar(props){ 
  return (
    <nav className="navbar"> 
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  )
}

function NavItem(props){
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

function  DropdownMenu() {

  function DropdownItem(props) {
    return (
      <a href="child" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children} 
        <span className="icon-button">{props.rightIcon}</span>
      </a>
    )
  }
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />}
        >
        Settings
      </DropdownItem>
    </div>
  )
}

export default App;
