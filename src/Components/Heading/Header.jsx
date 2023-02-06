import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import './Header.css';
import '../../App.css';
import '../Home/Home.jsx';

const Header = () => {
    const [click, setClick] = useState(false)
    return(
        <>
            <Head />
            <header>
                <nav className="flexls">
                    <ul className={click ? "mobile-nav" : "flexls"} onClick={() => setClick(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/todaydeals">Today's Deals</Link></li>
                        <li><Link to="/alldeals">All Deals</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <Link to="/login" className="navbtn">Login</Link>
                </nav>
            </header>

        </>
    )
}

export default Header;