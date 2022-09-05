import React, {useState} from 'react';
import {BsApple} from 'react-icons/bs'
import './header.scss'
import Basket from "../../components/Basket/Basket";

const Header = ({basket,setBasket}) => {

    const [active,setActive] = useState(false)


    return (
        <header className='header'>
            <div className="container">
                <div className='header-content'>
                    <div className="header-left">
                        <div>
                            <BsApple/>
                            WATCH
                        </div>
                    </div>

                    <div className="header-right">
                        <ul className="header-list">
                            <li className="header-item"><a className='header-link' href="">Design</a></li>
                            <li className="header-item"><a className='header-link' href="">Health</a></li>
                            <li className="header-item"><a className='header-link' href="">Workout</a></li>
                            <li className="header-item"><a className='header-link' href="">Activity</a></li>
                            <li className="header-item"><a className='header-link' href="">Connect</a></li>
                        </ul>
                        <p style={{marginLeft: '60px',color:'white'}} onClick={()=>setActive(true)}>Open Basket</p>
                    </div>
                </div>
            </div>
            <Basket basket={basket} setBasket={setBasket} active={active} setActive={setActive}/>
        </header>
    );
};

export default Header;