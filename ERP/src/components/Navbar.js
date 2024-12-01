"use client"
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return ( 
    <nav>
        <ul className='nav-bar'>
            <li className='logo'><a href='#'><img src='./logo.png'/></a></li>
            <input type='checkbox' id='check' />
            <span className="menu">
                 <li><a onClick={() => handleNavigation('/updates')}>Updates</a></li>
                    <li><a onClick={() => handleNavigation('/task')}>Tasks</a></li>
                    <li><a onClick={() => handleNavigation('/requests')}>Requests</a></li>
                    <li><a onClick={() => handleNavigation('/home')}>Dashboard</a></li>
                    <li><a onClick={() => handleNavigation('/feed')}>Feed</a></li>
                    <li><a onClick={() => handleNavigation('/logout')}>Log Out</a></li>
                <label htmlFor="check" className="close-menu"><FaTimes /></label>
            </span>
            <label htmlFor="check" className="open-menu"><FaBars /></label>
        </ul>
    </nav>

  ) ;
}
export default  Navbar;