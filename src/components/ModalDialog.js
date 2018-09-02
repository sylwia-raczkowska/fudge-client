import React, {Component} from 'react';
import {Dialog, FlatButton, Snackbar} from "material-ui";


const customContentStyle = {
    width: '25%',
    maxWidth: 'none'
};


export default class ModalDialog extends Component {


    state = {
        open: false,
        successBarOpen: false,
        failureBarOpen: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        let buttonLabel = this.props.buttonLabel;
        return (
            <div>
                <FlatButton label={buttonLabel}
                            style={{color: 'white'}}
                            onClick={this.handleOpen}/>
                <Dialog
                    title={this.props.title}
                    actions={
                        <div>
                            <FlatButton
                                label="Cancel"
                                primary={true}
                                onClick={this.handleClose}
                            />
                            <FlatButton
                                label={buttonLabel}
                                primary={true}
                                onClick={this.props.handleSubmit}
                            />
                        </div>}
                    modal={true}
                    contentStyle={customContentStyle}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    {this.props.content}
                    <br/>
                </Dialog>
                <Snackbar
                    open={this.props.successBar}
                    message={this.props.message}
                    onRequestClose={this.handleClose}
                    autoHideDuration={10}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                />
                <Snackbar
                    open={this.props.failureBar}
                    message="Sorry! Something went wrong. Please try again!"
                    onRequestClose={this.handleClose}
                    autoHideDuration={10}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                />
            </div>
        );
    }

}

