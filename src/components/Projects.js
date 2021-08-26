import React from 'react';
import ProjectCards from './ProjectCards';
export default function Projects({data}){
return ( 
        <div className="project-page">
            <h2> My Projects </h2>
            <div className="project--container">
                <ProjectCards data={data} />
            </div>
        </div>
)
}