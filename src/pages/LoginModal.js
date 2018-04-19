import React, {Component} from 'react';
import {Dialog, FlatButton, RaisedButton, TextField} from "material-ui";

const customContentStyle = {
    width: '25%',
    maxWidth: 'none',
};


export default class LoginModal extends Component {

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Login"
                primary={true}
                disabled={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <FlatButton label="Login"
                            style={{color: 'white'}}
                            onClick={this.handleOpen}/>
                <Dialog
                    title={"Please sign in"}
                    actions={actions}
                    modal={true}
                    contentStyle={customContentStyle}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>

                    <TextField
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                    />
                    <br/>
                    <TextField
                        type="password"
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                    />
                    <br/>
                    < RaisedButton
                        label="Submit"
                        primary={true}/>
                </Dialog>
            </div>
        );
    }
}

