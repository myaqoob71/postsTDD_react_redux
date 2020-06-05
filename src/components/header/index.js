import React from 'react';

/* Functional component */
const Header = (props) => {
    return (
        <header data-test = "headerComponent">
            <div className="wrap">
                <div className="logo">
                    <h1>Logo</h1> 
                    <hr/>
                </div>
            </div>
        </header>
    );
}
export default Header;