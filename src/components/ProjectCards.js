import { Tag, Affix } from 'antd';
import React from 'react';
import Badges from './Badges';
export default function ProjectCards(data){  
    let btools;
  let card =  data.data.map((project) => {  
     const {name, summary, type, tools, url, imgsrc, index} = project;
     btools = tools
  return(
    <div className="noselect project-card" key={index}>
                    <div className="noselect thumb">
                        <img src={imgsrc} alt={`${name} Screenshot`}/>
                    </div>
                       <Tag>{type}</Tag>
                    <article className="proj">
                        <h1>{name}</h1>
                        <span className="noselect projsummary">{summary}</span>
                    </article>
                    <a className="projLink" href={url} target="_blank">Visit Deployed Project</a>
         
                        <Badges tools={btools} />
                  </div>
            )
        })
        return card;
}