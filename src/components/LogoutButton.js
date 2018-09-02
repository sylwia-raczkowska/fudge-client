import {FlatButton} from "material-ui";
import React, {Component} from "react";
import {inject, observer} from "mobx-react/index";

const style = {
    display: 'flex',
    color: 'white'
};

@inject("movieStore")
@observer
class LogoutButton extends Component {

    render() {
        return (
            <div style={style}>
                <FlatButton label={"Logout"}
                            style={{color: 'white'}}
                            onClick={this.props.movieStore.logout}/>

            </div>)
    };
}

export default LogoutButton;