import React from 'react'
import Contact from './Contact'
import aboutData from '../data/aboutData'

export default function About(){
return (
    <div className="aboutMe-wrapper">

        <div className="aboutMe">
            <h1 className="subtopic">About Me</h1>
            <div className='about-content'>
            <h3>Hey there,</h3>
            <h2>I'm Peter Roto.</h2>
            <h3>Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u></h3>
        <br></br>
            <p>{aboutData.bio}</p>
        <br></br>
            <h4> Get In Touch:</h4>
            <Contact data={aboutData.contact} />
        </div>
        </div>
    </div>
        )
        }
