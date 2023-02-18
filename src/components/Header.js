import React from "react";


function Header( {onDarkModeClick, isDarkMode} ){
    return(
        <React.Fragment>
            <header>
                <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
                </button>
            </header>
        </React.Fragment>
    )
}


export default Header;



