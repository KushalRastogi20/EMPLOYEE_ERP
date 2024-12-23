import React from 'react';
import styles from "../page.module.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const EmployeeForm = () => {
  return (
    <div className={styles.loginparent}>
      <div className={styles.loginmainchild}>
        <div className={styles.child1}>
          <img src="./logincartoon.jpg" alt="Employee Form Illustration" />
        </div>
        <div className={styles.child2}>
          <div className={styles.child2header}>
            <h3>Welcome to ERP</h3>
            <h1>Employee Form</h1>
            <p>Please fill in your details to continue</p>
          </div>

          <form action="" method="post">
            <div className={styles.child2inputs}>
              <input
                type="text"
                name="employeeId"
                id="employee-id"
                placeholder="Enter your Employee ID"
              />
              <input
                type="text"
                name="name"
                id="employee-name"
                placeholder="Enter your Name"
              />
              <input
                type="email"
                name="email"
                id="employee-email"
                placeholder="Enter your Email"
              />
              <input
                type="text"
                name="department"
                id="employee-department"
                placeholder="Enter your Department"
              />
              <input
                type="text"
                name="designation"
                id="employee-designation"
                placeholder="Enter your Designation"
              />
              <input
                type="password"
                name="password"
                id="child2-password"
                placeholder="Enter your Password"
              />
              <div className={styles.rememberdiv}>
                <div className={styles.remchild1}>
                  <input type="checkbox" name="remember" id="remember-me" />
                  <p>Remember me</p>
                </div>
                <div className={styles.remchild2}>
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <button type="submit">Submit</button>
              <p>Don't have an account? <b><a href="#">Sign-up</a></b></p>
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
};

export default EmployeeForm;
