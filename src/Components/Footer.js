import React, { Component } from 'react'
import Fade from 'react-reveal'

class Footer extends Component {
  render() {
    if (!this.props.data) return null

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            {network.name === 'medium' ? (
              <svg
                fill="#525252"
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                width="30"
                viewBox="0 0 640 512"
              >
                <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z" />
              </svg>
            ) : (
              <i className={network.className}></i>
            )}
          </a>
        </li>
      )
    })

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; Copyright 2023 Atomic10 Studio</li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
