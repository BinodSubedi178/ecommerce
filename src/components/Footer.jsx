import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaPinterest } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-top">
            <div className="footer-logo-side">
              <div className="footer-logo">
                NEPTECH
              </div>
              <div className="company-slogan">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa reiciendis dicta, totam omnis unde debitis!
              </div>
              <div className="social-icons">
                <FaXTwitter className="indv-icon"/>
                <FaFacebookSquare className="indv-icon"/>
                <FaPinterest className="indv-icon"/>
                <BsInstagram className="indv-icon"/>
              </div>
            </div>
            <div className="footer-menu-side">
                <div className="footer-shop">
                  <h4 className="footer-heading">Shop</h4>
                <a href="#">All</a>
                <a href="#">Sale</a>
                <a href="#">Apple</a>
                <a href="#">Samsung</a>
                <a href="#">Google</a>
                </div>
                <div className="footer-company">
                  <h4 className="footer-heading">Company</h4>
                  <a href="#">About</a>
                  <a href="#">Blog</a>
                  <a href="#">Contact Us</a>
                  <a href="#">FAQs</a>
                  <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </div>
          <hr className="horizontal-line" />
          <div className="footer-rights">
            <p>&copy; 2025 NepTech. All Rights Reserved. </p>
          </div>
    </div>
  )
}
