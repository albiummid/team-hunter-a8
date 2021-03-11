import React from 'react';
import "./Header.css"
const Header = (props) => {
    return (
        <div className="header-container">
    
                {
                    props.children
            }
        </div>
    );
};

export default Header;