import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import styles from '../style/App.module.css'
import 'antd/dist/antd.css'
import { Button } from 'antd';

function Logout() {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    }

    return(
        <div className={styles.logout}>
            <p className={styles.logouttext}>Welcome:<br></br>{localStorage.getItem('username')}</p>
            <Button danger className={styles.logoutbtn} onClick={logOut}>Logout</Button>
        </div>
    )
}

export default Logout