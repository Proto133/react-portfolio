import React from 'react';
export default function Social({data}){
    console.log(data)
  let socialLinks = data.map((link,index) =>{
return (<a href={link.url} target="_blank" key={index}><i className={link.icon}></i></a>);
    })
return (
<div className="social">
{socialLinks}
</div>
)
}
