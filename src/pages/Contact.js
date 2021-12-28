import React from 'react';
export default function Contact({data}){
const contact = data.map((method, index) =>{
     return(
     <div key={index} id={method.name}>
         <a href={method.url} target="_blank">
             <i className={method.icon}></i>
             <p>{method.name}</p>
        </a>
     </div>
     )
 })

 return( 
     <div className="contact-card">
         {contact}
     </div>
 )}