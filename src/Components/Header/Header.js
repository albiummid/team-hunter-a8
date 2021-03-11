import React from 'react';
import "./Header.css"
const Header = (props) => {
    return (
        <div className="header-container">
            <div className="d">
                {
                    props.children
            }
            </div>
        </div>
    );
};

export default Header;