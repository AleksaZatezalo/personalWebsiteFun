import React from 'react'
import "./about.css"
import ME from "../../assets/aleksa.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
    return (
       <section id="about">
           <h5>Get To Know</h5>
           <h2>About Me</h2>
           <div className='container about__container'>
               <div className="about__me">
                   <div className="about__me-image">
                       <img src={ME} alt="About Me"/>
                   </div>
               </div>
              <div className='about__contnet'>
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experiance:</h5>
                        <small>1+ Years</small>
                    </article>
                    <article className='about__card'>
                        <FiUsers className='about__icon'/>
                        <h5>Clients:</h5>
                        <small>2</small>
                    </article>
                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects:</h5>
                        <small>2</small>
                    </article>
                </div>
                <p>Aleksa is a Cloud Security Consultant at Deloitte. He has  a passion for Penetration Testing, Web and Mobile Development, and Secure Software Architecture in the cloud. Currently he is pursuing his OSCP and learning to delpy A.I into the cloud to detect adversarial input. He posseses the CEH v10 and a B.Sc in Computer Science from the University of Toronto.</p>
                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
              </div>
           </div>
       </section>
    )
}

export default About