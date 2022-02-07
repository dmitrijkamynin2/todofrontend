import Regist from './components/Regist.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.js'
import styles from './style/App.module.css'
import Home from './Home.js';

function App() {
  return (
          <div className={styles.mybody}>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/regist" element={<Regist />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        )
}

export default App;