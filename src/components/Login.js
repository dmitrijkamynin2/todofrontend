import styles from "../style/App.module.css"
import 'antd/dist/antd.css'
import { Button, Input, message, Spin } from 'antd';
import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
const config = require('../config.js')
const axios = require('axios');

function Login() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [waitResponce, setWaitResponce] = useState(false);
    const navigate = useNavigate();

    const changeUserName = (e) => {
        setUserName(e.target.value);
    }

    const changeUserPassword = (e) => {
        setUserPassword(e.target.value);
    }

    // axios.interceptors.response.use((rec) => {
    //     return rec
    // }, (err) => {
    //     setWaitResponce(false);
    //     message.error(err.response.data);
    // });

    const reqData = async () => {
        try {
            if (userName.length < 1 || userName.length > 20) {
                throw Error('login must be between 1 and 20 characters');
            }       
            if (userPassword.length < 6 || userPassword.length > 10) {
                throw Error('password must be between 6 and 10 characters');
            }
            setWaitResponce(true);
            const token = await axios.post(`${config.url}/login`,{
              name: userName,
              password: userPassword,
            });
            console.log(token.data)
            if (!!token) {
                localStorage.setItem('token', token.data);
                localStorage.setItem('username', userName);
                navigate('/');
            };
        } catch(err) {
            setWaitResponce(false);
            message.error(err.message);
        }
    }

    return(
        <form className={styles.formAuth}>
            { !waitResponce ?
                <div>
                <h1>Login</h1>
                    Username:
                    <Input className={styles.elemForm} value={userName} onChange={changeUserName}/>
                    Password:
                    <Input.Password className={styles.elemForm} value={userPassword} onChange={changeUserPassword}/>
                    <Button className={styles.elemForm} onClick={reqData}>Submit</Button>
                    <Link to='/regist'>
                        Don't have an account?
                    </Link>
                </div>
            :
            <div  className={styles.authSpin}>
                <Spin className={styles.authSpin} size="large" tip="Loading..."/>
            </div>            
            }


        </form>
    )
}

export default Login