import React, { Component } from "react";
import './home.scss';
import video from "../../Assets/bg.mp4";
import Facilities from "../Facilities/Facilities";

export default class Home extends Component {
  render() {
    return (
      <div>
      <section className="home">
      <div className="video-container">
        <video autoPlay loop muted className="video-bg">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Unlocking Plant Health Insights with AgarRiskPro
          </h1>
          <p className="subTitle">Your Device-Based Disease Detective</p>
          <button className="btn">
            <a href="">Explore More</a>
          </button>
        </div>
      </div>
    </section>
    <section>
      <Facilities></Facilities>
    </section>
    </div>

    );
  }
}
