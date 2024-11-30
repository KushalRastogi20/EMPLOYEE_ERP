import React from 'react';
import styles from "../page.module.css";

export default function task(){
    return(
        <div className={styles.taskparent}>
            <div className={styles.taskchild}>
                <div className={styles.taskcontainer1}>
                    <h2>TASKS</h2>
                    <p>LOREM LOREM LOREM</p>
                </div>
                <div className={styles.taskcontainer2}>
                    <div>
                        <h2>On Going Task</h2>
                        <h4>Project Details</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            veniam saepe, explicabo aperiam ratione corrupti. Magnam 
                            molestiae necessitatibus dolorum iure!
                        </p>     

                        <h4>Project Details</h4>   
                        <ol type='1'>
                            <li>Team Member One</li>
                            <li>Team Member One</li>
                            <li>Team Member One</li>
                            <li>Team Member One</li>
                        </ol>  
                        
                        <h4>Department</h4>  
                        <p>Technical Department</p>  
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ducimus sint mollitia quod eaque autem, delectus iusto 
                            commodi excepturi libero accusantium labore maxime quos 
                        </p>
                        <a href="#">Learn More</a>
                    </div>

                    <div>
                        <h2>On Going Task</h2>
                        <h4>Project Details</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ducimus sint mollitia quod eaque autem, delectus iusto 
                            commodi excepturi libero accusantium labore maxime quos
                        </p>     

                        <h4>Project Details</h4>   
                        <ol type='1'>
                            <li>Team Member One</li>
                            <li>Team Member One</li>
                            <li>Team Member One</li>
                            <li>Team Member One</li>
                        </ol>  
                        
                        <h4>Department</h4>  
                        <p>Technical Department</p>  
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ducimus sint mollitia quod eaque autem, delectus iusto 
                            commodi excepturi libero accusantium labore maxime quos 
                        </p>
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}