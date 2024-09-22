import React from 'react'


//import css
import styles from "./AppLayout.module.css";


//import components
import Sidebar from '../components/Sidebar'
import Map from '../components/Map';
import User from '../components/User';

const AppLayout = () => {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
            <User />
        </div>
    )
}

export default AppLayout