import React from 'react';
import {AppBar} from "material-ui";
import LoginModal from "../pages/LoginModal";

const NavBar = () => (
    <AppBar
        title="Potrzebujemy nazwy:)"
        iconElementRight={<LoginModal/>}
        showMenuIconButton={false}

    />
);

export default NavBar;