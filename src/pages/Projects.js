import React from 'react';
import FeaturedCards from '../components/FeaturedCards';
import ProjectCards from '../components/ProjectCards';
export default function Projects({data}){

    let featuredData=[]
    let regData=[]

    data.forEach(project =>{ 
        if (project.featured === true){
            featuredData = [...featuredData, project]
        } else if (project.featured ===false){
            regData=[...regData, project]
        }
        return (regData, featuredData)
    })
    // Add filter for featured projects v regProjects here.
return ( 
        <div className="project-page">
            {/* <h2> My Projects </h2> */}
                <FeaturedCards data={featuredData}/>
            <div className="project--container">
                <ProjectCards data={regData} />
            </div>
        </div>
)
}