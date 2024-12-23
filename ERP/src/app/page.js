"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Home() {
     const router = useRouter();
  return (
    
    <div className={styles.landingparent}>
      <div className={styles.landingchild}>
        <div className={styles.landingchild1}>
          <div className={styles.landingtitle}>
            <h1>WE MANAGE OUR FUTURE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint mollitia quod eaque autem, delectus iusto commodi excepturi libero accusantium labore maxime quos veniam saepe, explicabo aperiam ratione corrupti. Magnam molestiae necessitatibus dolorum iure!</p>
          </div>
          <div className={styles.landingbutton}>
          <button className={styles.Lbutton1} type="button" onClick={() => router.push('/login')}>
      Sign up
    </button>
            
            <button className={styles.Lbutton2}>Learn more about us</button>
          </div>
        </div>
        <div className={styles.landingchild2}>
          <Image src="/tiltimage.jpg" alt="" width={500} height={500} priority />
        </div>
      </div>
      {/* <div className={styles.scrollme}>
        <h2>
          scroll
          <IoIosArrowForward />
        </h2>
      </div> */}
    </div>
  );
}
