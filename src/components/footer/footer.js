import React, { Component } from "react";

const currentYear = new Date().getFullYear();
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="https://github.com/williamkimball" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/william-kimball/"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
            <ul className="copyright">
              <li>© Copyright {currentYear} William Kimball</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </footer>
    );
  }
}
