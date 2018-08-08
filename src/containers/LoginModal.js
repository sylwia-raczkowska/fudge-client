import React, {Component} from 'react';
import {TextField} from "material-ui";
import ModalDialog from "../components/ModalDialog";
import {validateEmail, validateLength} from "../actions/FormValidators";
import {ACCESS_TOKEN, login} from '../actions/ApiCaller';
import {inject, observer} from "mobx-react/index";



@inject("movieStore")
@observer
export default class LoginModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                password: '',
                email: ''

            },
            formErrors: {
                password: '',
                email: ''
            },
            valid: false,
            successBar: false,
            failureBar: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if (this.state.valid === true) {
            event.preventDefault();
            const loginRequest = this.state.formData;
            login(loginRequest)
                .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                this.setState({successBar: true})
                })
                .catch(error => {
                this.setState({successBar: true});
                this.props.movieStore.login(response.accessToken);
            }).catch(error => {
                this.setState({failureBar: true})
            });
        } else {
            Object.keys(this.state.formData).forEach(d => this.validateField(d, this.state.formData[d]));
        }
    }

    handleChange(event) {
        const {formData} = this.state;
        const name = event.target.name;
        const value = event.target.value;
        formData[name] = value;
        this.setState({formData},
            () => {
                this.validateField(name, value)
            });
    }

    render() {
        return (
            <ModalDialog
                buttonLabel={"Login"}
                title={"Please sign in"}
                handleSubmit={this.handleSubmit}
                successBar={this.state.successBar}
                failureBar={this.state.failureBar}
                message={"Success sign in!"}
                content={[
                    <TextField
                        type="text"
                        hintText="Enter your email"
                        errorText={this.state.formErrors.email}
                        floatingLabelText="Email"
                        name={"email"}
                        fullWidth={true}
                        onChange={this.handleChange}/>,
                    <br/>,
                    <TextField
                        type="Password"
                        hintText="Type your password"
                        floatingLabelText="Password"
                        name={"password"}
                        errorText={this.state.formErrors.password}
                        fullWidth={true}
                        onChange={this.handleChange}/>]}/>
        );
    }

    validateField(name, value) {

        const {formErrors} = this.state;

        if (name === 'password') {
            formErrors[name] = validateLength(value)
        }

        if (name === 'email') {
            formErrors[name] = validateEmail(value)
        }

        this.setState({formErrors});
        this.setState({valid: formErrors[name] === ''});

    }

}


