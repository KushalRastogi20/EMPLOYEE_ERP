import React from 'react'
import styles from "../page.module.css";

const dashboard = () => {
  return (
    <div className={styles.homecontainer}>
      <div className={styles.homecontainer2}>
         <div className={styles.homecontainer3}>
            <div className ={styles.upperContainer}> 
                <div className={styles.taskProgress}>
                   <h2>TASK PROGRESS</h2>
                   <h3>On Going Task:</h3>
                   <ul>
                     <li> ERP design</li>
                     <li> ERP Frontend</li>
                   </ul>
                   <button><a href="#">View Tasks &gt;</a></button>
                </div>
                <div className={styles.ranking}>
                   <h2>Ranking</h2>
                   <p>Employee Of The Week <span>↑ +20</span></p>
                   <p>Rank <span>12</span> (estimated)+20</p>
                   <p>*correct ranks and winner to be announced in team meet</p>
                </div>
            </div>
            <div className={styles.lowerContainer}>
              <div className={styles.attendance}>
                  <h2>Attendence (19feb - 25feb)</h2>
                  <p>76%</p>
                  <ul>
                   <li>S</li>
                   <li>S</li>
                   <li>F</li>
                   <li>T</li>
                   <li>W</li>
                   <li>T</li>
                   <li>M</li>
                  </ul>
              </div>
              <div className={styles.upcomingMeetings}>
                 <h2>Upcoming Meetings</h2>
                 <ul>
                  <li>Meet 01; 10:00 PM - 11:00 PM &nbsp;<a href="#">Know More About This Meet &gt;</a></li>
                  </ul>
                  <button><a href="#">More Details</a></button>
                 
              </div>
            </div>
          </div>
          <div className={styles.announcement}>
             <h2>Announcement</h2>
              <p>No Announcement</p>
          </div>
        </div>
        <div className={styles.homeinputBar}>
           <span className={styles.homeinputBarText}>Contact Department :</span>
           <input className={styles.homeinputBox} type="text" placeholder="Input box 1"></input>
            <input className={styles.homeinputBox} type="text" placeholder="Input box 2"></input>
          <button className={styles.sendQuerybutton}>Send Query</button>
        </div>
    </div>
  );
}
export default dashboard
