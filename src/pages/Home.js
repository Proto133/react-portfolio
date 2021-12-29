import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import aboutData from '../data/aboutData';
import Social from '../components/Social'

export default function Home(){
    const {name, imgsrc, contact} = aboutData
    return (
        <div className="wrapper">

            <div className="condiv home">
                <img src={imgsrc} alt={`${name}'s headshot`} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={[`I am ${name}`,`I am a web developer`]} speed={100} eraseDelay={700}/>
               <div className="social--container">
                   <Social data={contact}/>
                </div> 
            </div>
        </div>
        )
}
