import styles from "../style/App.module.css"
import 'antd/dist/antd.css'
import { Checkbox, Button, Row, Col, Input, message } from 'antd';
import { CSSTransition } from 'react-transition-group'


function Regist() {

    return(
        <form className={styles.formAuth}> 
            <h3>Form registration</h3>
            Create username:
            <Input className={styles.elemForm}/>
            Create password:
            <Input className={styles.elemForm}/>
            Repeat password:
            <Input className={styles.elemForm}/>
            <Button className={styles.elemForm}>Submit</Button>
        </form>
    )
}

export default Regist