import React from "react";
import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit} action="">
                    <FormInput type="email" name="email" id="email" value={this.state.email} handleChange={this.handleSubmit} label="Email" required />

                    <FormInput type="password" name="password" id="password" value={this.state.password} handleChange={this.handleSubmit} label="Password" required />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignIn;