import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import me from '../images/me.jpeg'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={3}>
            <div style={{textAlign: 'center'}}>
              <img
                src={me}
                className="avatar-hidden"
                alt="avatar"
                style={{height: '200px', borderRadius:'20px'}}
              />
            </div>

            <h4 className="mt-20-mobile" style={{color: 'grey'}}>Backend Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Madrid</p>
            <h5>Phone</h5>
            <p>(+34) 690 69 65 61</p>
            <h5>Email</h5>
            <p>silver301193@gmail.com</p>
            <h5>Web</h5>
            <p><a target="_blank" href="http://marcodesantes.com" >marcodesantes.com</a></p>
            <p><a target="_blank" href="http://porfolio.marcodesantes.com" >portfolio.marcodesantes.com</a></p>
            <p><a target="_blank" href="http://scrumtools.marcodesantes.com" >scrumtools.marcodesantes.com</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          
          <Cell className="resume-right-col" col={9}>
            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2019}
              schoolName="Universidad Complutense de Madrid"
            />

            <Education
              startYear={2018}
              endYear={2018}
              schoolName="Google - DOUBLECLICK FOR PUBLISHERS"
              schoolDescription="License Number: 5769485438943232"
            />

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Udemy - DOMINANDO LARAVEL"
              schoolDescription="License Number: UC-5VC15VOJ"
            />

            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Udemy - APRENDIENDO REACT JS"
              schoolDescription="License Number: UC-7LW49VKZ"
            />

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Udemy - MICROSERVICIOS CON SPRING BOOT Y SPRING CLOUD NETFLIX EUREKA"
              schoolDescription="License Number: UC-31f300d3-0c6f-4236-82d8-b10ae26c6500"
            />

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Udemy - JENKINS CURSO INTENSIVO PARA DEVOPS Y DESARROLLADORES"
              schoolDescription="License Number: UC-bd9af511-3d5a-4e36-9ee8-3c9111d4b02e"
            />

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Udemy - DOCKER DE CERO A EXPERTO"
              schoolDescription="License Number: UC-a3ea6c4c-e121-4ed3-8c2b-7d1e363e2698"
            />

            <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="FullStack Developer"
              jobDescription="Global Incubator - Madrid"
            />

            <Experience
              startYear={2020}
              endYear={"now"}
              jobName="Senior Backend Developer"
              jobDescription="Global Incubator - Madrid"
            />
              
            <hr style={{borderTop: '3px solid #e22947'}} />
            
            <h2>Skills</h2>
            
            <Skills
              skill="PHP"
              progress={100}
            />

            <Skills
              skill="Laravel / Lumen"
              progress={90}
            />
            
            <Skills
              skill="Spring Boot"
              progress={80}
            />
            
            <Skills
              skill="Flask Python"
              progress={70}
            />
          
            <Skills
              skill="ReactJS"
              progress={50}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
