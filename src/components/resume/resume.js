import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <section id="resume">
        {/* Education
        ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Nashville Software School</h3>
                <p className="info">
                  Full Stack Web Development Bootcamp <span>•</span>{" "}
                  <em className="date">November 2018</em>
                </p>
                <p>
                  Intensive full-time software development bootcamp focusing on
                  full stack development fundamentals and problem solving.{" "}
                  <br />
                  <br />
                  Strong focus on C# .NET, Javascript, and React. <br />• Hands
                  on application of OOP fundamentals and SOLID principles
                  through group and individual projects reflecting real world
                  business problems. <br />• Source code version control with
                  Git/GitHub. <br />• Project management/tracking with Github
                  Projects & Issue Tracking. <br />• JavaScript fundamentals
                  leveraging DRY, modular, readable code and reusable
                  components. <br />• Built single-page applications with React,
                  Browserify, HTML, CSS, jQuery. <br />• Task Automation with
                  Grunt: ESLint, module bundling with Browserify. <br />• Styled
                  applications with CSS Frameworks Bootstrap, Bulma and Bloomer.{" "}
                  <br />• Deployed applications through Amazon S3, GitHub Pages,
                  Heroku. <br />• Application design through white boarding
                  dependencies and building ERD’s. <br />• Leveraged VirtualBox
                  for virtualizing a Windows environment.
                  <br />• Learned unit testing to write testing suites for code.
                  <br />• Created and modified database design/content using
                  SQL, ADO.NET, and ORM tooling, including exposure and
                  experience with migrations.
                  <br />• Created RESTful APIs with C#/.NET using WebAPI.
                  <br />• Leveraged Razor for creating and editing MVC
                  applications.
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Lee University</h3>
                <p className="info">
                  B.A. Degree Anthropology <span>•</span>{" "}
                  <em className="date">July 2017</em>
                </p>
                <p>
                  Comprehensive and multidisciplinary Anthropology degree
                  program which covered all four fields of Anthropology:
                  Archaology, Biological Anthropology, Cultural Anthropology and
                  Linguistics. Coursework included Archaeological field
                  experience at multiple sites, an ethnography that was
                  presented at a research symposium, and a minor in Teaching
                  English to Speakers of Other Languages (with TESOL
                  certification).
                </p>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Education */}
        {/* Work
        ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Nashville Software School</h3>
                <p className="info">
                  Apprentice Software Developer <span>•</span>{" "}
                  <em className="date">May 2018 - Present</em>
                </p>
                <p>
                  <br/>• Worked in a simulated SCRUM environment on a multitude of
                  diffferent projects. <br/>• Build DartBoard - a travel planning
                  application in React. <br/>• Won the coveted "Diplomat" superlative
                  from classmates after front-end capstones. <br/>• Third tallest in
                  the class.
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Highlands Professional Group, LLC</h3>
                <p className="info">
                  Operations Assistant <span>•</span>{" "}
                  <em className="date">May 2017 - May 2018</em>
                </p>
                <p>
                  <br />• Processed HIPA regulated medical billing items to the
                  State of Tennessee Department of Disability Services. <br />•
                  Organized and executed renovation of a housing structure
                  through managing sub-contractors. <br />• Configured 13 office
                  locations around Tennessee, Alabama, and Georgia.
                </p>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Work */}
        {/* Skills
        ----------------------------------------------- */}
        {/* <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <div className="bars">
              <ul className="skills">
                <li>
                  <span className="bar-expand photoshop" />
                  <em>Photoshop</em>
                </li>
                <li>
                  <span className="bar-expand illustrator" />
                  <em>Illustrator</em>
                </li>
                <li>
                  <span className="bar-expand wordpress" />
                  <em>Wordpress</em>
                </li>
                <li>
                  <span className="bar-expand css" />
                  <em>CSS</em>
                </li>
                <li>
                  <span className="bar-expand html5" />
                  <em>HTML5</em>
                </li>
                <li>
                  <span className="bar-expand jquery" />
                  <em>jQuery</em>
                </li>
              </ul>
            </div> 
            // end skill-bars 
          </div>{" "} 
          main-col end 
        </div>{" "} */}
        {/* End skills */}
      </section>
    );
    {
      /* Resume Section End*/
    }
  }
}
