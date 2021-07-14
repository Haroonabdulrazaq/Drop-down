import React from "react";
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'

function App() {
  return (
    <NavBar>
     <NavItem icon={<BellIcon/>}/>
     <NavItem icon={<PlusIcon/>}/>
     <NavItem icon={<MessengerIcon/>}/>
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
  return (
    <li className="nav-item">
      <a href="blog" className="icon-button">
        {props.icon}
      </a>
    </li>
  )
}

export default App;
