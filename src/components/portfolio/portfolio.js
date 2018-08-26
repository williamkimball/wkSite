import React, { Component } from "react";
export default class Portfolio extends Component {
  render() {
    return (
  
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" title>
                      <img alt src="images/portfolio/DartBoardRed.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>DartBoard</h5>
                          <p>Travel Planning</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt src="http://christypresler.com/assets/images/blog/2013/11/rabbit-line.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Reactive Nutshell</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" title>
                      <img alt src="images/portfolio/origami.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Task Tracker</h5>
                          <p>Web Development</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                {/* <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-04" title>
                      <img alt src="images/portfolio/into-the-light.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Into The Light</h5>
                          <p>Photography</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup
            --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-DartBoard.PNG" alt />
              <div className="description-box">
                <h4>DartBoard</h4>
                <p>DartBoard is a travel planning app that users can utilize as a central repository for information related to their travel plans.</p>
                <span className="categories"><i className="fa fa-tag" />React, Travel</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/williamkimball/dartboard" target="_blank">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-ReactiveNutshell.PNG" alt />
              <div className="description-box">
                <h4>Reactive Nutshell</h4>
                <p> Nutshell is a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages. Built from the ground up in React.</p>
                <span className="categories"><i className="fa fa-tag" />React, CRUD</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/Ridiculous-Rabbits/reactive-nutshell" target="_blank">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-TaskTracker.PNG" alt />
              <div className="description-box">
                <h4>Task Tracker</h4>
                <p>Basic task tracker application. Created using Javascript, Browserify, Grunt, and jQuery.</p>
                <span className="categories"><i className="fa fa-tag" />Javascript</span>
              </div>
              <div className="link-box">
                <a href="https://github.com/nss-day-cohort-26/task-tracker-otiose-okapis">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>{/* modal-03 End */}
            {/* <div id="modal-04" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt />
              <div className="description-box">
                <h4>Into the Light</h4>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <span className="categories"><i className="fa fa-tag" />Photography</span>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>modal-04 End */}
          </div> {/* row End */}
        </section>); {/* Portfolio Section End*/}
    }
  }