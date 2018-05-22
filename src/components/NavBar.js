import React from 'react';
import {AppBar} from "material-ui";
import LoginModal from "../pages/LoginModal";
import RegistrationModal from "../pages/RegistrationModal";

const style = {
    display: 'flex'
};

const rightElements = (
    <div style={style}>
        <LoginModal/>
        <RegistrationModal/>
    </div>
);

const NavBar = () => (
    <AppBar
        title="Fudge"
        iconElementRight={rightElements}
        showMenuIconButton={false}

    />
);

export default NavBar;