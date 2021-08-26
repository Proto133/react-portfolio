import React from 'react';
import {Tag} from 'antd';

export default function Badges(tools){
    console.log('tools:', tools);
    return(
tools.tools.map((tool,index)=> {
    if (tool === 'Javascript'){return <Tag color="magenta" className={`${tool}-badge badge`}key={index}>{tool}</Tag>}
    if (tool === 'CSS'){return <Tag color="cyan" className={`${tool}-badge badge`}key={index}>{tool}</Tag>}
    if (tool === 'Nodejs'){return  <Tag color="lime"  className={`${tool}-badge badge`}key={index}>{tool}</Tag>}
    if (tool === 'HTML') {return <Tag color="default"  className={`${tool}-badge badge`}key={index}>{tool}</Tag>}
    if (tool === 'Firebase'){return  <Tag color='red' className={`${tool}-badge badge`}key={index}>{tool}</Tag>;}
}
)
    )}
