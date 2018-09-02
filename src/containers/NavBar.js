import React, {Component} from 'react';
import {AppBar, FlatButton} from "material-ui";
import LoginModal from "./LoginModal";
import RegistrationModal from "../pages/RegistrationModal";
import {inject, observer} from "mobx-react/index";
import LogoutButton from "../components/LogoutButton";
import Link from "react-router-dom/es/Link";


const style = {
    display: 'flex',
    color: 'white'
};

const noAuth = (
    <div style={style}>
        <LoginModal/>
        <RegistrationModal/>
    </div>
);

const auth = (
   <LogoutButton/>
);

function rightButtons(authenticated) {
    return (
    <div style={style}>
        <Link to="/top100" style={{ textDecoration: 'none' }} >
            <FlatButton style={style} label={"Top100"} onClick={"/top100"}/> </Link>
        {authenticated ? auth : noAuth}
    </div> )
}


@inject("movieStore")
@observer
class NavBar extends Component {

    render() {
        const {authenticated} = this.props.movieStore;
        return (
            <AppBar
                title="Fudge"
                iconElementRight={rightButtons(authenticated)}
                showMenuIconButton={false}
            >
            </AppBar>
        )
    }
}


export default NavBar;