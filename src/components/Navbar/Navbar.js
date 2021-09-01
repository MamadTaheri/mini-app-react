import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <ul className={classes.list}>
                <li><Link to="/">خانه</Link></li>
                <li><Link to="/signup">ثبت نام</Link></li>
                <li><Link to="/api"> دریافت از سرور </Link></li>
            </ul>
        </>
    );
};

export default Navbar;