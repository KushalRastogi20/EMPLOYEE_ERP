import React from 'react';
import styles from "../page.module.css";



const Register = () => {
  return (
    <div className={styles.Registerparent}>
      <div className={styles.Registerchild}>
        <div className={styles.Registerchild1}><img src="./logincartoon.jpg" alt="" srcSet="" /></div>
        <div className={styles.Registerchild2}>
          <div className={styles.Registerchild2header}>
            <h1>Register</h1>
            <p>part of IndiBus?? register to access ERP and more.....</p>
          </div>

          <form action="" method="post">
            <div className={styles.Registerchild2inputs}>
            <div className={styles.RgMainUserInfo}>
          <div className={styles.RgUserInputBox}>
            
            <input type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter Full Name"/>
          </div> 
          <div className={styles.RgUserInputBox}>
            <input type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Department"/>
          </div>
          <div className={styles.RgUserInputBox}>
           <input type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"/>
          </div>
          <div className={styles.RgUserInputBox}>
            <input type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"/>
          </div>
          <div className={styles.RgUserInputBox}>
            <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"/>
          </div>

          <div className={styles.RgUserInputBox}>
            <input type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"/>
          </div>
        </div>
              
              <div className={styles.RegistercheckBox}>
                <div className={styles.Rgchild1}><input type="checkbox" name="" id="" />
                  <p>I agree to all <b>Terms</b> and  <b>Privacy Policies</b></p>
                </div>
                </div>
              <button>Create Account</button>
              <p>Already have an account?<a href='#'><b>LogIn</b></a></p>
            </div>
          </form>
            </div>
            </div>
            </div>
            
  );
}

export default Register;
