import React, {Component} from 'react';
import ModalDialog from "../components/ModalDialog";
import {TextField} from "material-ui";
import {validateEmail, validateEquals, validateLength} from "../actions/FormValidators";
import {register} from '../actions/ApiCaller';


// reset stanu po cancel
export default class RegistrationModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                username: '',
                password: '',
                confirmPassword: ''

            },
            formErrors: {
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
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
            const signUpRequest = this.state.formData;
            console.log(signUpRequest);
            register(signUpRequest).then(response => {
                this.setState({successBar: true})
            }).catch(error => {
                this.setState({failureBar: true})
            });
        } else {
            Object.keys(this.state.formData).forEach(d => this.validateField(d, this.state.formData[d]))
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
            <div>
                <ModalDialog
                    buttonLabel={"Sign up"}
                    title={"Please sign up"}
                    handleSubmit={this.handleSubmit}
                    successBar={this.state.successBar}
                    failureBar={this.state.failureBar}
                    message={"Thank you! You're successfully registered. Please Login to continue!"}
                    content={[
                        <TextField
                            hintText="Enter your e-mail"
                            floatingLabelText="E-mail"
                            fullWidth={true}
                            errorText={this.state.formErrors.email}
                            name={"email"}
                            onChange={this.handleChange}
                        />,
                        <br/>,
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            errorText={this.state.formErrors.username}
                            name={"username"}
                            validators={['required']}
                            fullWidth={true}
                            onChange={this.handleChange}
                        />,
                        <br/>,
                        <TextField
                            type="Password"
                            hintText="Enter your Password"
                            errorText={this.state.formErrors.password}
                            floatingLabelText="Password"
                            name={"password"}
                            fullWidth={true}
                            onChange={this.handleChange}/>,
                        <br/>,
                        <TextField
                            type="Password"
                            hintText="Confirm your password"
                            floatingLabelText="Confirm password"
                            name={"confirmPassword"}
                            errorText={this.state.formErrors.confirmPassword}
                            fullWidth={true}
                            onChange={this.handleChange}/>
                    ]}
                />

            </div>
        );
    }

    validateField(name, value) {

        const {formErrors} = this.state;
        if (name === 'email') {
            formErrors[name] = validateEmail(value);
        }

        if (name === 'password' || name === 'username' || name === 'confirmPassword') {
            formErrors[name] = validateLength(value);
        }

        if (name === 'confirmPassword') {
            formErrors[name] = validateLength(value);
            if (formErrors['password'] === '') formErrors[name] = validateEquals(value, this.state.formData.password);
        }

        this.setState({formErrors});
        this.setState({valid: formErrors[name] === ''});
    }
}


