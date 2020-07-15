import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from '../images/me.jpeg'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={me}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Backend Developer</h1>

            <hr/>

          <p>Laravel / Lumen | Spring Boot | Flask | ReactJS | React Native (In progress)</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/marco-desantes-325867138/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/silverzero" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="https://stackoverflow.com/users/10998327/marco-desantes" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-stack-overflow" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
