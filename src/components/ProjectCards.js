import React from 'react';
import Badges from './Badges';
export default function ProjectCards(regData){  
    let btools;
    let shieldSrc;
 let projects =regData.data.map((project) => {  
        const { name, summary, type, tools, url, imgsrc, index, featured} = project;
        btools = tools
        if (type === 'Solo'){
            shieldSrc = `https://img.shields.io/badge/${type}_Project-blue`;
        } else{
            shieldSrc = `https://img.shields.io/badge/${type}_Project-orange`;
        }
        return(
    <div className="noselect project-card" style={{backgroundImage:`url(${imgsrc})`, backgroundSize:'cover', margin:'1rem'}} key={index}>
        <div className="card-mask">

        {/* <div className="noselect thumb">
            <img src={imgsrc} alt={`${name} Screenshot`}/>
        </div> */}
        <article className="proj">
            {/* <span className="proj-title"> */}
            <h2>{name}</h2>
            {/* </span> */}
            <div className="project-summary">{summary}</div>
            <br />
        </article>
        <a className="projLink" href={url} target="_blank">&#x1F517; Visit Deployed Project</a>
        {/* <div className="tools--container">
            <h4>Tools and Resources Used</h4> */}
            <div className="badge-list">
            <Badges tools={btools} />
            </div>
        {/* </div> */}
        <img className="type-shield" src={shieldSrc} alt={`${type} badge`}></img>
        </div>
    </div>)
 })
 return (

 <div className='other-frame'>
        <h2>Other Projects</h2>
{/* </div> */}
    <section id='normal-projects'>
     <div className='normal--container' style={{display:'flex', justifyContent:'space-evenly', flexFlow:'row wrap'}}> 
     {projects}
     </div>
 </section> 
 </div>
)
}
