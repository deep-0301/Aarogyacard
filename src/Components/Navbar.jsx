import React, { useEffect, useState } from 'react';
import 'react-jquery-plugin';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../Images/brand.png'



const Navbars = () => {

    const [show, setShow] = useState(true);
    const [num, setNum] = useState(1);
    const handleClick = () => {
        setShow(!show)
        setNum(0)
    };

    console.log(show);

    //collapse button jquery
    if (show && num === 1)
        window.$(document).ready(function () {
            window.$("#menu").click(function () {
                window.$('#collapse').slideToggle('slow');
            });
        });

    useEffect(() => {
        window.$(function () {
            window.$(window).scroll(() => {
                if (window.$(window).scrollTop() > 10) {
                    window.$('.navbar').addClass('active');
                } else {
                    window.$('.navbar').removeClass('active');
                }
            });
        });
    });

    return show ? (
        <>
            <header className="header">
                <nav className="navbar navbar-expand-lg fixed-top py-3 container">
                    <div className="container">
                        <a
                            href="/HealthCard"
                            className="navbar-brand font-weight-bold"
                        >
                            <img src={logo} width="60" height="40" className="d-inline-block align-top" alt="" />
                                Aarogya-Card
                            </a>
                        <button
                            className="navbar-toggler"
                            id='menu'
                            type="button"
                            onClick={handleClick}
                        >
                            <MenuIcon
                                className='Menu'
                            />
                        </button>
                        <div id='collapse' className='collapse navbar-collapse'>
                            <ul
                                className="navbar-nav ml-auto"
                            >
                                <li className="nav-item active">
                                    <a href="/Aarogyacard" className="nav-link font-weight-bold">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a href="/Aarogyacard/#FAQ" className="nav-link font-weight-bold">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/Aarogyacard/#service" className="nav-link font-weight-bold">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/Aarogyacard/Register" className="nav-link font-weight-bold">Register</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/Aarogyacard/login" className="nav-link font-weight-bold">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/Aarogyacard/contact" className="nav-link font-weight-bold">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    ) :

        (
            <>
                <header className="header">
                    <nav className="navbar navbar-expand-lg fixed-top py-3 container">
                        <div className="container">
                            <a
                                href="/HealthCard"
                                className="navbar-brand font-weight-bold"
                            >
                                <img src={logo} width="60" height="40" className="d-inline-block align-top" alt="" />
                        Aarogya-Card
                    </a>
                            <button
                                className="navbar-toggler"
                                id='menu'
                                type="button"
                                onClick={handleClick}
                            >
                                <CloseIcon
                                    className='Menu'
                                />
                            </button>
                            <div id='collapse' className='collapse navbar-collapse'>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a href="/Aarogyacard" className="nav-link font-weight-bold">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/Aarogyacard/#FAQ" className="nav-link font-weight-bold">FAQ</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/Aarogyacard/#service" className="nav-link font-weight-bold">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/Aarogyacard/Register" className="nav-link font-weight-bold">Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/Aarogyacard/login" className="nav-link font-weight-bold">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/Aarogyacard/contact" className="nav-link font-weight-bold">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
}

export default Navbars;