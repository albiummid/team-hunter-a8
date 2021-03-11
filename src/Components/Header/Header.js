import React from 'react';
import "./Header.css"
import logo from '../../Photo/team-hunter.png';
import menuIcon from '../../Photo/menu.png';
const Header = (props) => {
    return (
        <div className="header">
                <div className="navbar">
                <img src={logo} className="logo" alt="" />
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Teams</a></li>
                        <li><a href="/">Materials</a></li>
                        <li><a href="/">About Us</a></li>
                    </ul>
                </nav>
                <img src={menuIcon} className="menu-icon" alt="" />
            </div>
            <div className="header-container">
        
                {
                    props.children
            }
        </div>
        </div>
        
    );
};

export default Header;