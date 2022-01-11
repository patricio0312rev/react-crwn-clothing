import React, { useState } from "react";
import './sign-up.styles.scss';

import FormInput from './../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import { connect } from 'react-redux';
import { signUpStart } from './../../redux/user/user.actions';

const SignUp = ({ signUpStart,  }) => {
    const [userCredentials, setCredentials] = useState({ displayName: '', email: '', password: '', confirmPassword: ''});

    /*constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }*/

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        /*const { signUpStart } = this.props;*/

        if(password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        signUpStart({ displayName, email, password })

        /* 
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch(error) {
            console.log(error);
        }
        */
    }

    const handleChange = event => {
        const { name, value } = event.target;

        /*this.setState({[name]: value});*/
        setCredentials({ ...userCredentials, [name]: value });
    }

    /*const { displayName, email, password, confirmPassword } = this.state;*/

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type='text' 
                    name='displayName' 
                    value={displayName} 
                    onChange={handleChange} 
                    label='Display Name'
                />

                <FormInput 
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={handleChange} 
                    label='Email'
                /> 

                <FormInput 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={handleChange} 
                    label='Password'
                />

                <FormInput 
                    type='password' 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    onChange={handleChange} 
                    label='Confirm Password'
                />

                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    );
    
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(SignUp);