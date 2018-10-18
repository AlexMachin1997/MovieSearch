import React from "react";
import Logo from "../../green_app_icon.svg";

const Header = () => {

    const styles = {
        padding: '15px'
    }

    return (
        <header className="background-black" style={styles}>
             <img alt="MovieDB Search" width="100" src={Logo}/>
        </header>       
    );
};

export default Header;