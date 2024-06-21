
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './style.css'

const Footer = () => {
  return (
    <footer className="footer-section">
        <h1>Follow Us On</h1>
        <ul>
            <li><IoLogoInstagram/></li>
            <li><FaYoutube/></li>
            <li><CiTwitter/></li>
            <li><FaFacebook/></li>
            <li><FaLinkedin/></li>
        </ul>
    </footer>
  )
}

export default Footer