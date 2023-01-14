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
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/GiftCards">Gift Cards</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header;