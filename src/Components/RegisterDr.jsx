import React from 'react';
import TextField from '@material-ui/core/TextField'
import { motion } from 'framer-motion'

import user from '../Images/user.png'
const RegisterDr = ({ handleClick }) => {
    return (
        <div className="register-page">
            <motion.div
                className="container register"
                initial={{ marginLeft: 100 }}
                animate={{ margin: 0, transition: { type: "tween", duration: 1 } }}
            >
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src={user} alt="user" height="70" width="150" />
                        <h3>Create an Account</h3>
                        <p>Free Register For Digital Aarogya Card</p>
                        <h6>Have an Account?</h6>
                        <a href="/HealthCard/login">
                            <button
                                variant='contained'
                                size='large'
                                color='secondary'
                                className='left-button mb-2'
                            >
                                Login
                        </button>
                        </a>
                        <br />
                    </div>
                    <div
                        className="col-md-9 register-right"
                    >
                        <ul
                            className="nav nav-tabs nav-justified"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <a
                                    name="Patient"
                                    onClick={handleClick}
                                    className="nav-link"
                                    id="patient-tab"
                                    data-toggle="tab"
                                    href="#patient"
                                    id="patient"
                                    role="tab"
                                    aria-controls="patient"
                                    aria-selected="true"
                                >
                                    Patient
                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    name="Doctor"
                                    onClick={handleClick}
                                    className="nav-link active"
                                    id="doctor-tab"
                                    data-toggle="tab"
                                    href="#doctor"
                                    id="doctor"
                                    role="tab"
                                    aria-controls="doctor"
                                    aria-selected="false"
                                >
                                    Doctor
                </a>
                            </li>
                        </ul>
                        <div
                            className="tab-pane fade show"
                            id="doctor"
                            role="tabpanel"
                            aria-labelledby="doctor-tab"
                        >
                            <h3 className="register-heading">Register as a Doctor</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="text"
                                            className="form-control"
                                            label="Hospital Name "
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <TextField
                                            type="text"
                                            variant='outlined'
                                            label='Doctor Name'
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="email"
                                            className="form-control"
                                            label="Email "
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="text"
                                            maxLength="10"
                                            minLength="10"
                                            className="form-control"
                                            label="Phone "
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="text"
                                            className="form-control"
                                            label="Hospital Registration No. "
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="password"
                                            className="form-control"
                                            label="Password "
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="password"
                                            className="form-control"
                                            label="Confirm Password "
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type=""
                                            className="form-control"
                                            label="Hospital Adress "
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        color="secondary"
                                        variant='contained'
                                        className=' right-button'
                                        size='large'
                                    >Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default RegisterDr;