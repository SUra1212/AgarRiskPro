import React, { Component } from "react";
import "./facilities.scss";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
// import Aos from "aos";
// import "aos/dist/aos.css";

import remedy from "../../Assets/remedy.jpg";
import severity from "../../Assets/severity.png";
import water from "../../Assets/water.jpeg";
import wind from "../../Assets/wind.jpg";
import iot from "../../Assets/iot.jpg";
import disease from "../../Assets/disease.jpg";

const Data = [
  {
    id: 1,
    imgSrc: remedy,
    serTitle: "Plant Disease Remedy Prediction",
    location: "",
    grade: "culture",
  },
  {
    id: 2,
    imgSrc: severity,
    serTitle: "Plant Disease Severity Prediction",
    location: "",
    grade: "culture",
  },
  {
    id: 3,
    imgSrc: water,
    serTitle: "Predicting Disease Spread Through Water",
    location: "",
    grade: "culture",
  },
  {
    id: 4,
    imgSrc: wind,
    serTitle: "Predicting Disease Spread Through Wind",
    location: "",
    grade: "culture",
  },
  {
    id: 5,
    imgSrc: iot,
    serTitle: "Plant Disease Early Risk Prediction",
    location: "",
    grade: "culture",
  },
  {
    id: 6,
    imgSrc: disease,
    serTitle: "Plant Disease Name Prediction",
    location: "",
    grade: "culture",
  },
];

class Facilities extends Component {
  render() {
    return (
      <section className="facilities section container">
        <div className="secContainer">
          <div className="secHeader flex">
            <div className="textDiv">
              <h2 className="secTitle">Our Services</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                odio iste dolores eveniet expedita, sed natus molestiae
                molestias rerum reiciendis omnis inventore possimus pariatur
                repellendus facere, saepe sit, architecto maiores!
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2500"
              className="iconsDiv flex"
            >
              <BsArrowLeftShort className="icon leftIcon" />
              <BsArrowRightShort className="icon" />
            </div>
          </div>
          <div className="mainContent grid">
            {Data.map(({ id, imgSrc, serTitle, location, grade }) => {
              return (
                <div className="singleService" key={id}>
                  <div className="serviceImage">
                    <img src={imgSrc} alt="Image Title" />
                    <div className="overlayInfo">
                      <h3>{serTitle}</h3>
                      <p>{location}</p>
                      <BsArrowRightShort className="icon" />
                    </div>
                  </div>
                  <div className="serviceFooter">
                    <div className="number">0{id}</div>
                    <div className="serviceText">
                      <h6>{serTitle}</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className="icon" />
                        </span>
                        {}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Facilities;
