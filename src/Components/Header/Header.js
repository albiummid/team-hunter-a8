import React from 'react';
import "./Header.css"
const Header = (props) => {
    return (
        <div className="header-container">
            {/* <img src={Background} alt=""/> */}
            <div className="d">
                {
                    props.children
            }
            </div>
        </div>
    );
};

export default Header;