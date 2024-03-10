import React from "react";
import "./About.css";
import aboutImage from "../../img/cover11.jpg";
import Showbooks from "../../components/ShowBooks/Showbooks";
import Sechead from "../../components/Sechead/Sechead";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <section className="about">
      <Header />
      <div className="container">
        <div className="sec-tit">
        </div>

        <div className="about-container grid">
          <div className="about-image">
            <img src={aboutImage} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-tit fs-26 ls-1">About Us</h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              debitis facilis consequatur voluptates necessitatibus praesentium
              minus, temporibus quibusdam molestias voluptatum vero itaque odio
              hic nesciunt unde ipsam recusandae accusantium rem.
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              debitis facilis consequatur voluptates necessitatibus praesentium
              minus, temporibus quibusdam molestias voluptatum vero itaque odio
              hic nesciunt unde ipsam recusandae accusantium rem.
            </p>
          </div>
        </div>
      </div>
      <Showbooks/>
      <Sechead/>
    </section>
  );
};

export default About;
