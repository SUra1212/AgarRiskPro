import React, { Component } from "react";
import { ImLeaf } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";

import "./navBar.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activate: "navBar",
      transparent: "header",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.addBg);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.addBg);
  }

  showNav = () => {
    this.setState({ activate: "navBar activeNavBar" });
  };

  removeNav = () => {
    this.setState({ activate: "navBar" });
  };

  addBg = () => {
    if (window.scrollY >= 10) {
      this.setState({ transparent: "header activeHeader" });
    } else {
      this.setState({ transparent: "header" });
    }
  };

  render() {
    return (
      <section className="navBarSection">
        <div className={this.state.transparent}>
          <div className="logoDiv">
            <a href="#" className="logo"></a>
            <h1 className="flex" style={{ color: "white" }}>
              <ImLeaf className="icon" style={{ color: "white" }} />
              AgarRiskPro®
            </h1>
          </div>
          <div className={this.state.activate}>
            <ul className="navLists flex">
              <li className="navItem"  style={{ listStyleType: 'none' }}>
                <a href="#" className="navLink">
                  Home
                </a>
              </li>
              <li className="navItem" style={{ listStyleType: 'none' }}>
                <a href="#" className="navLink">
                  About Us
                </a>
              </li>
              <li className="navItem" style={{ listStyleType: 'none' }}>
                <a href="#" className="navLink">
                  Contact Us
                </a>
              </li>
              {/* <li className="navItem" style={{ listStyleType: 'none' }}>
                <a href="#" className="navLink">
                  
                </a>
              </li> */}
              <li className="navItem" style={{ listStyleType: 'none' }}>
                <a href="#" className="navLink">
                  IOT
                </a>
              </li>
              {/* <li className="navItem">
                <a href="#" className="navLink">
                  Disease Detection
                </a>
              </li> */}
              <div className="headerBtns flex">
                <button className="btn loginBtn">
                  <a href="">Login</a>
                </button>
                <button className="btn ">
                  <a href="">Sign Up</a>
                </button>
              </div>
            </ul>
            <div onClick={this.removeNav} className="closeNavBar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={this.showNav} className="toggleNavBar">
            <BsGrid3X3Gap className="icon" />
          </div>
        </div>
      </section>
    );
  }
}

export default NavBar;
