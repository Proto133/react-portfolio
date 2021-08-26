import React from 'react'
import { Card } from 'antd';
import aboutData from '../data/aboutData'

export default function About(){
return (
    <div className="aboutCard">
        <Card title="About Peter" style={{flex: "0 0 60%" }}>
            <img src={aboutData.imgsrc} alt="Headshot" />
            <p>{aboutData.bio}</p>
        </Card>
    </div>
)
}