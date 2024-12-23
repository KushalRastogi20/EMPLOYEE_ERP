"use client";
import React, { useState } from "react";
import styles from "../page.module.css";

const RegisterEmployee = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAgreed: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.termsAgreed) {
      setError("You must agree to the terms and privacy policies.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Send data to the backend API
      const response = await fetch("/api/employee/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Employee registered successfully!");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          termsAgreed: false,
        });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.Registerparent}>
      <div className={styles.Registerchild}>
        <div className={styles.Registerchild1}>
          <img src="./logincartoon.jpg" alt="Login Illustration" />
        </div>
        <div className={styles.Registerchild2}>
          <div className={styles.Registerchild2header}>
            <h1>Employee Registration</h1>
            <p>Join the team and access the ERP system for efficient management.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.Registerchild2inputs}>
              <div className={styles.RgMainUserInfo}>
                <div className={styles.RgUserInputBox}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.RgUserInputBox}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.RgUserInputBox}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.RgUserInputBox}>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.RegistercheckBox}>
                <div className={styles.Rgchild1}>
                  <input
                    type="checkbox"
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleChange}
                    id="termsAgreed"
                  />
                  <p>
                    I agree to all <b>Terms</b> and <b>Privacy Policies</b>
                  </p>
                </div>
              </div>
              <button type="submit" disabled={loading}>
                {loading ? "Creating Account..." : "Create Account"}
              </button>
              {error && <p className={styles.error}>{error}</p>}
              <p>
                Already have an account? <a href="#"><b>LogIn</b></a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterEmployee;
