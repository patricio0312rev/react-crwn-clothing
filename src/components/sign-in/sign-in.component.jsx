import React, { useState } from "react";
import { connect } from "react-redux";

import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from './../custom-button/custom-button.component';

import { emailSignInStart, googleSignInStart } from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [ userCredentials, setCredentials ] = useState({ email: '', password: '' });

    /*constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }*/

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        /* const { emailSignInStart } = this.props; */ 

        emailSignInStart(email, password);

        /* try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(error) {
            console.log(error);
        } */
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value })
    }

    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sing in with your email and password</span>

            <form onSubmit={handleSubmit} action="">
                <FormInput type="email" name="email" id="email" value={email} handleChange={handleChange} label="Email" required />

                <FormInput type="password" name="password" id="password" value={password} handleChange={handleChange} label="Password" required />

                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);