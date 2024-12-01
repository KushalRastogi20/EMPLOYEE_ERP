import React from 'react';
import Image from 'next/image';
import styles from "../page.module.css";

export default function profile() {
  return (
    <div className={styles.Profileparent}>
      <div className={styles.Profilechild}>
        <div className={styles.ProfileImage}><img src="./bgimg2.png" alt=""></img>
        <p>Kushal Rastogi</p>
        </div>
        <div className={styles.ProfileContainer}>
        <div className={styles.ProfileColumn1}>
        <label htmlFor="email">Email:</label><input type="email" id="email" name="email" /><br /><br />
        <label htmlFor="contact">Contact Number:</label><input type="tel" id="contact" name="contact" /><br /><br />
        <label htmlFor="address">Address:</label><input type="text" id="address" name="address" /><br /><br />
        <label htmlFor="availability">Availability:</label><input type="text" id="availability" name="availability" />
        </div>
        <div className={styles.ProfileColumn2}>
          <label htmlFor="bio">Bio:</label><textarea id="bio" name="bio"></textarea><br /><br />
          <label htmlFor="skills">Technical Skills:</label><textarea id="skills" name="skills"></textarea><br />
        </div>
        <div className={styles.ProfileColumn3}>
        <label htmlFor="project">Current Project:</label><input type="text" id="project" name="project" /><br /><br />
      <label htmlFor="experience">Experience:</label><input type='text' id="experience" name="experience" /><br /><br />
      <label htmlFor="location">Address:</label><input type="text" id="location" name="location" /><br /><br />
      <label htmlFor="availability">Availability:</label><input type="text" id="availability" name="availability" />
        </div>
      </div>
      </div>
    </div>
  )
}
