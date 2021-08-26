import React from 'react'
import Contact from './Contact'
import aboutData from '../data/aboutData'

export default function About(){
return (
        <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h4>Hey there,</h4>
            <h2>I'm Peter Roto.</h2>
            <h3>Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u></h3>
        <br></br>
            <p>{aboutData.bio}</p>
        <br></br>
            <h4> Get In Touch:</h4>
            <Contact data={aboutData.contact} />
        </div>
        )
        }
