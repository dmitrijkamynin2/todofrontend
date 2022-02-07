import styles from "../style/App.module.css"
import 'antd/dist/antd.css'
import { Checkbox, Button, Row, Col, Input, message } from 'antd';
import { CSSTransition } from 'react-transition-group'


function Login() {

    return(
        <form className={styles.formAuth}> 
            <h3>Login</h3>
            Username:
            <Input className={styles.elemForm}/>
            Password:
            <Input className={styles.elemForm}/>
            <Button className={styles.elemForm}>Submit</Button>
            <a href="https://qna.habr.com/q/917849">
                Already have an account?
            </a>
        </form>
    )
}

export default Login