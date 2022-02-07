import styles from "../style/App.module.css"
import 'antd/dist/antd.css'
import { Button, Input } from 'antd';
import {useState} from 'react'
const config = require('../config.js');
const axios = require('axios');

function Regist() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userSecondPassword, setUserSecondPassword] = useState('');

    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const changeUserPassword = (e) => {
        setUserPassword(e.target.value);
    }

    const changeUserSecondPassword = (e) => {
        setUserSecondPassword(e.target.value);
    }

    const reqData = async () => {
        try {
            setUserPassword('');
            setUserSecondPassword('');
            const resultReq  = await axios.post(`${config.url}/regist`,{
              name: userName,
              password: userPassword,
            });
            document.location.replace(`${config.thisUrl}/login`);
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <form className={styles.formAuth}> 
            <h1>Form registration</h1>
            <p className={styles.textForm}>Create username:</p>
            <Input className={styles.elemForm} value={userName} onChange={changeUserName}/>
            <p className={styles.textForm}>Create password:</p>
            <Input.Password className={styles.elemForm} value={userPassword} onChange={changeUserPassword}/>
            <p className={styles.textForm}>Repeat password:</p>
            <Input.Password className={styles.elemForm} value={userSecondPassword} onChange={changeUserSecondPassword}/>
            <Button className={styles.elemForm} onClick={reqData}>Submit</Button>
            <a href={`${config.thisUrl}/login`}>
                Already have an account?
            </a>
        </form>
    )
}

export default Regist