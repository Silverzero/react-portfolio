import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import me from '../images/me.jpeg'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Marco Desantes</h2>
            <img
              src={me}
              className="contact-image"
              alt="avatar"
              style={{height: '250px', borderRadius:'20px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
              Hi! I'm Marco, i am 26 years old and im currently working like Senior Backend Developer in Madrid (Spain) specialized in PHP with knowledge in Laravel / Lumen, Spring Boot Java, Flask Python, and a little bit of ReactJS (16.8 "Hooks")
            </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+34) 690 69 65 61
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    silver301193@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
