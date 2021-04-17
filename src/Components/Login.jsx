import React from 'react'
import TextField from '@material-ui/core/TextField'
import user from '../Images/user.png'
import './Login.css';
import { motion } from 'framer-motion'
const Login = () => {
    return (
        <div className="login-page">
            <motion.div
                className="container login"
                initial={{ marginLeft: 100 }}
                animate={{ margin: 0, transition: { type: "tween", duration: 1 } }}
            >
                <div className="row">
                    <div className="col-md-4 login-left">
                        <img src={user} alt='userimg' height="70" width="150" />
                        <h3>Welcome to Login Page</h3>
                        <p>Login now  </p>
                        <h6>Create an Account</h6>
                        <a href="/HealthCard/Register">
                            <button
                                variant='contained'
                                size='large'
                                color='secondary'
                                className='left-button'
                            >
                                Register
                        </button>
                        </a>
                    </div>
                    <div
                        className="col-lg-7 login-right"
                    >

                        <h3 className="Login-heading">Login Form</h3>
                        <div className="row login-form">
                            <div className="col-md-6 container">
                                <div className="form-group">
                                    <TextField
                                        type="text"
                                        variant='outlined'
                                        className="form-control"
                                        label="Aarogya ID"
                                        size='medium'
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <TextField
                                        type="password"
                                        variant='outlined'
                                        className="form-control"
                                        label="Password"
                                        size='medium'
                                        required
                                    />
                                </div>

                                <div className='form-group'>
                                    <button
                                        type="button"
                                        color="secondary"
                                        variant='contained'
                                        className="form-control"
                                        size='large'
                                        className='ml-5 mt-4 right-button'
                                    >
                                        Login
                                </button>
                                </div>
                                <div className='form-group'>
                                    <a href="#forgot" className='ml-3'>Forgot password?</a>
                                    <a href="#help" className='ml-3'>Need help?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Login;