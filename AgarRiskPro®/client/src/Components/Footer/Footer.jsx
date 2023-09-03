import React, { Component } from "react";
import "./footer.scss";
import { ImLeaf } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="secContainer container grid">
          <div className="logoDiv">
            <div className="footerLogo">
              <a href="#" className="logo flex">
                <h1 className="flex">
                  <ImLeaf className="icon" />
                  AgarRiskPro®
                </h1>
              </a>
            </div>
            <div className="socials flex">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <AiFillInstagram className="icon" />
            </div>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">Helpful Links</span>
            <ul>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Conditions</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">Information</span>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">IOT</a>
              </li>
            </ul>
          </div>
          <div className="footerLinks">
            <span className="linkTitle">Contact Us</span>
            <span className="phone">076 555 5555</span>
            <span className="email">AgarRiskPro@gmail.com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
