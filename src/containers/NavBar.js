import React, { Component } from 'react';
import {AppBar, MenuItem} from "material-ui";
import LoginModal from "./LoginModal";
import RegistrationModal from "../pages/RegistrationModal";
import {inject, observer} from "mobx-react/index";
import {Link} from "react-router-dom";

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
  <div style={style}>
    <Link to={`/`}>
     <MenuItem primaryText="Movies" />
    </Link>
    <MenuItem primaryText="Logout" />
  </div>
);


@inject("movieStore")
@observer
class NavBar extends Component {

  render() {
    const {authenticated} = this.props.movieStore;
    return (
      <AppBar
        title="Fudge"
        iconElementRight={authenticated ? auth : noAuth}
        showMenuIconButton={false}
      />
    )
  }
}



export default NavBar;