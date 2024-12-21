import React from 'react';
import styles from "../page.module.css"
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


{/* <FaFacebook /> */}


const Login = () => {
  return (
    <div className={styles.loginparent}>
      <div className={styles.loginmainchild}>
        <div className={styles.child1}><img src="./logincartoon.jpg" alt="" srcSet="" /></div>
        <div className={styles.child2}>
          <div className={styles.child2header}>
            <h3>Welcome,to ERP</h3>
            <h1>Login</h1>
            <p>Login to access your travelwise account</p>
          </div>

          <form action="" method="post">
            <div className={styles.child2inputs}>
              <input type="email" name="Email" id="emailchild2"  placeholder='Enter your Email'/>
              <input type="password" name="password" id="child2-password" placeholder='Enter your Password'/> <span className={styles.eye}><i className="bi bi-eye-slash-fill"></i></span>
              <div className={styles.rememberdiv}>
                <div className={styles.remchild1}><input type="checkbox" name="" id="" />
                  <p>Remember me</p>
                </div>
                <div className={styles.remchild2}><a href='#' >Forgot password?</a></div>
              </div>
              <button>Login</button>
              <p>Don't have an account?<b><a href="#">Sign-up</a></b></p>
            </div>
          </form>
          <div className={styles.anotherlogin}>
            <p>Or login with</p>
            <div className={styles.loginicons}>
            <div className={styles.loginiconsgoogle}>
              
            <FaGoogle />
            </div>
            <div className={styles.loginiconsfacebook}>

            <FaFacebook />
            </div>
            <div className={styles.loginiconsgithub}>

            <FaGithub />
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
