import React from "react";
import './sign-in.styles.scss';

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
                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleSubmit} required />
                    <label htmlFor="email">Email</label>

                    <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleSubmit} required />
                    <label htmlFor="password">Password</label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignIn;