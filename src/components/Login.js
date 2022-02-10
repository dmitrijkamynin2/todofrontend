import styles from "../style/App.module.css"
import 'antd/dist/antd.css'
import { Button, Input, message } from 'antd';
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
const config = require('../config.js')
const axios = require('axios');

function Login() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const changeUserPassword = (e) => {
        setUserPassword(e.target.value);
    }

    const reqData = async () => {
        try {
            if (userName.length < 1 || userName.length > 20) {
                throw new Error('login must be between 1 and 20 characters');
            }       
            if (userPassword.length < 6 || userPassword.length > 10) {
                throw new Error('password must be between 6 and 10 characters');
            }
            const token = await axios.post(`${config.url}/login`,{
              name: userName,
              password: userPassword,
            });
            localStorage.setItem('token', token.data);
            localStorage.setItem('username', userName);
            navigate('/');
        } catch(err) {
            message.error(err.message);
            console.log(err);
        }
    }

    return(
        <form className={styles.formAuth}> 
            <h3>Login</h3>
            Username:
            <Input className={styles.elemForm} value={userName} onChange={changeUserName}/>
            Password:
            <Input.Password className={styles.elemForm} value={userPassword} onChange={changeUserPassword}/>
            <Button className={styles.elemForm} onClick={reqData}>Submit</Button>
            <Link to='/regist'>
                Don't have an account?
            </Link>
        </form>
    )
}

export default Login