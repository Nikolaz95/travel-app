import React from 'react'
import { Link } from 'react-router-dom';

/* import Logo from "../../public/icon.png" */

//import css
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <Link to="/">
            <img src="../../public/logo.png" alt="WorldWise logo" className={styles.logo} />
        </Link>
    )
}

export default Logo