import React from 'react';
import Badges from './Badges';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'violet',
};



const FeaturedCards =({data})=>{
    let btools;
    let shieldSrc;

    let cards = data.map(project =>{
        const {imgsrc, name, index, summary, type, tools, url} =project;
        btools = tools
        if (type === 'Solo'){
            shieldSrc = `https://img.shields.io/badge/${type}_Project-blue`;
        } else{
            shieldSrc = `https://img.shields.io/badge/${type}_Project-orange`;
        }
    return (
        <div className="featured--card">
        <div className="noselect project-card" key={index}>
        <div className="noselect thumb">
            <img src={imgsrc} alt={`${name} Screenshot`}/>
        </div>
            <img className="type-shield" src={shieldSrc} alt={`${type} badge`}></img>
        <article className="proj">
            <h2>{name}</h2>
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
</div>
    )
})
return (
    <div className="feature-frame">
        <h2>Featured Projects</h2>
    <section id='featured'>
    {cards}
    </section>
    </div>
)
}

export default FeaturedCards;