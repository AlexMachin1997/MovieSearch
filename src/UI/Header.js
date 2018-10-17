import React from "react";
import Logo from "../green_app_icon.svg";

const Header = () => {
    return (
        <table className="titleBar">
            <tbody>
                <tr>
                    <td>
                        <img alt="MovieDB Search" width="100" src={Logo}/>
                    </td>
                    <td>
                        <h1>MoviesDB Search</h1>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Header;