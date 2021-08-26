import { Tag, Affix } from 'antd';
import React from 'react';
import Badges from './Badges';
export default function ProjectCards(data){  
    let btools;
    let shieldSrc;
    let card =  data.data.map((project) => {  
        const {name, summary, type, tools, url, imgsrc, index} = project;
        btools = tools
        if (type === 'Solo'){
            shieldSrc = `https://img.shields.io/badge/${type}_Project-blue`;
        } else{
            shieldSrc = `https://img.shields.io/badge/${type}_Project-orange`;
        }

  return(
    <div className="noselect project-card" key={index}>
        <div className="noselect thumb">
            <img src={imgsrc} alt={`${name} Screenshot`}/>
        </div>
        <article className="proj">
            <h2>{name}</h2>
            <img className="type-shield" src={shieldSrc} alt={`${type} badge`}></img>
            <div className="project-summary">{summary}</div>
            <br />
        </article>
        <a className="projLink" href={url} target="_blank">Visit Deployed Project</a>
        <div className="tools--container">
            <h4>Tools and Resources Used</h4>
            <div className="badge-list">
            <Badges tools={btools} />
            </div>
        </div>
    </div>
            )
        })
        return card;
}