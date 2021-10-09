import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png'
import Search from './Search';
import Menu from './Menu';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="logo">
                    <Link to="/" >
                        <img onClick={() => window.scrollTo({top: 0})} src={Logo} alt="Logo" />
                    </Link>
                </div>
                <Search />
                <Menu/>
                
            </nav>
        </div>
    )
}

export default Header;