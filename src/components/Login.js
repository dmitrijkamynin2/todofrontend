import styles from "../style/App.module.css"
import 'antd/dist/antd.css'
import { Button, Input } from 'antd';
import {useState} from 'react'
const config = require('../config.js')
const axios = require('axios');

function Login() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const changeUserPassword = (e) => {
        setUserPassword(e.target.value);
    }

    const reqData = async () => {
        try {
            // setUserPassword('');
            // const token = await axios.patch(`${config.url}/login`,{
            //   name: userName,
            //   password: userPassword,
            // });
            // console.log(token.data);
            // window.axios = axios.create({
            //     headers: {
            //         'Authorization': token.data,
            //     }
            // });
            alert(window.axios.defaults.headers.Authorization);
            // document.location.replace(`${config.thisUrl}/login`);
        } catch(err) {
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
            <a href={`${config.thisUrl}/regist`}>
                Don't have an account?
            </a>
        </form>
    )
}

export default Login