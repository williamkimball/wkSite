import React, { Component } from "react";
import Pdf from './williamKimballResume.pdf';
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.PNG" alt="Betatakin cave wall" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Curiosity has always been my defining character trait, and ever
              since I was a child I have voraciously consumed new information.
              My inquisitiveness led me to pursue education in anthropology as I
              sought to understand humanity more deeply. After finishing my
              undergraduate education, I was seeking a career path that would
              allow me to be in a constant state of growth, when I was
              introduced to software development by a family friend. Until that
              point, I had always considered programming to be a skill you
              needed to begin while young to be truly good at it, and never
              really pursued it apart from writing "Hello, world" in about a
              dozen different languages. However, once I truly dug in and
              started to learn, I was absolutely hooked. I spent 12 hours a day
              for the next two months learning to program, and made the decision
              that software development was a career that would be more than
              just a job for me when I enrolled in Nashville Software School's
              Full Stack development bootcamp. Four months later, I am often
              stunned when I reflect on how my life has changed, and I am
              incredibly excited to be pursuing a career that has no room for
              intellectual stagnation, and will constantly push me to learn new
              skills.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                <span>William Kimball</span>
                  <br />
                  <span>
                    {/* 1600 Amphitheatre Parkway
                    <br /> */}
                    Milton, TN 37118 US
                  </span>
                  <br />
                  <span>(615) 796-5049</span>
                  <br />
                  <span>wkkimball043@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={Pdf} target="_blank" className="button">
                    <i className="fa fa-download" />
                    Download My Full Resume
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </div>
      </section>
    );
  }
}
