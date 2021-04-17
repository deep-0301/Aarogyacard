import React from 'react';
import TextField from '@material-ui/core/TextField'
import user from '../Images/user.png';
import { motion } from 'framer-motion'

const RegisterPr = ({ handleClick }) => {
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
                        <p>Free Registration For Digital Aarogya Card</p>
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
                                    className="nav-link active"
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
                                    className="nav-link "
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
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="patient"
                                role="tabpanel"
                                aria-labelledby="patient-tab"
                            >
                                <h3 className="register-heading ">Register as a Patient</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextField
                                                variant='outlined'
                                                type="text"
                                                className="form-control"
                                                label="First Name "
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                variant='outlined'
                                                type="text"
                                                className="form-control"
                                                label="Last Name "
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
                                            <div className="maxl">
                                                <label className="radio inline" />
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value="male"
                                                // checked
                                                />
                                                <span> Male </span>
                                                <label className="radio inline" />
                                                <input type="radio" name="gender" value="female" />
                                                <span> Female </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextField
                                                variant='outlined'
                                                type="email"
                                                className="form-control"
                                                label="Your Email "
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                variant='outlined'
                                                type="text"
                                                minLength="10"
                                                maxLength="10"
                                                name="txtEmpPhone"
                                                className="form-control"
                                                label="Your Phone "
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option className="hidden">
                                                    Blood Group
                                                    </option>
                                                <option> A- </option>
                                                <option> A+ </option>
                                                <option> B- </option>
                                                <option> B+ </option>
                                                <option> O- </option>
                                                <option> O+ </option>
                                                <option> AB- </option>
                                                <option> AB+ </option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                type='date'
                                                variant='outlined'
                                                type="date"
                                                className="form-control"
                                                label="Date of Birth "
                                                required
                                                InputLabelProps={{ shrink: true }}
                                            >
                                            </TextField>
                                        </div>
                                        <button
                                            type="submit"
                                            color="secondary"
                                            variant='contained'
                                            className='mt-3 right-button'
                                            size='large'
                                        >
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default RegisterPr;