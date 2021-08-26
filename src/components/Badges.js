import React from 'react';
// import {Tag} from 'antd';

export default function Badges(tools){
    console.log('tools:', tools);
    return(
tools.tools.map((tool,index)=> {
   return <img key={index} src={`https://img.shields.io/badge/<>-${tool.tool}-${tool.color}`} alt={`${tool.tool} badge`}></img>
})
)}