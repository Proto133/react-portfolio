import React from 'react';
import ProjectCards from './ProjectCards';
export default function Projects(data){
return ( 
<div className="project--container">
<ProjectCards data={data.data} />
</div>

)
}