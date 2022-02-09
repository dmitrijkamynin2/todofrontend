import styles from "../style/App.module.css"
import 'antd/dist/antd.css'
import { Button, Input, message } from 'antd';
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
const config = require('../config.js');
const axios = require('axios');

function Regist() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userSecondPassword, setUserSecondPassword] = useState('');
    const navigate = useNavigate();

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
            if (userName.length < 1 || userName.length > 20) {
                throw new Error('login must be between 1 and 20 characters');
            }       
            if (userPassword.length < 6 || userPassword.length > 10) {
                throw new Error('password must be between 6 and 10 characters');
            }
            if (userPassword !== userSecondPassword) {
                throw new Error('Passwords must match');
            }
            setUserPassword('');
            setUserSecondPassword('');
            const resultReq  = await axios.post(`${config.url}/regist`,{
              name: userName,
              password: userPassword,
            });
            navigate('/login');
        } catch(err) {
            message.error(err.message);
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
            <Link to='/login'>
                Already have an account?
            </Link>
        </form>
    )
}

export default Regist