import React, {useState} from "react";
import styles from '../style/App.module.css'
import 'antd/dist/antd.css'
import { Button, Input, Row, Col, message } from 'antd';

function Head({addDo, sort , currentFilter, filterBy, orderBy}) {
    return(
        <div className={styles.logout}>
            <p className={styles.logouttext}>Welcome:<br></br>'username'</p>
            <Button danger className={styles.logoutbtn}>Logout</Button>
        </div>
    )
}

export default Head