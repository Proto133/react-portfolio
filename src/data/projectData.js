const HTML = {
    tool:'HTML',
    color:'lightgrey'
}
const JS ={
    tool:'Javascript', 
    color:'green'
}
const NODE = {
    tool:'Nodejs',
    color:'7fff00'
}
const CSS = {
    tool:'CSS',
    color:'blue'
}
const FB = {
    tool:'Firebase', 
    color:'red'
}
const EXP ={
    tool:'Express',
    color:'ff00ff'
}
const SESS={
    tool:'Express_Session', 
    color:'7fffd4'
}
const HB ={
    tool:'Handlebars', 
    color:'ee7600'
}
const HERO ={
    tool:'Heroku',
    color:'66337e' 
}
 const MONGO ={
     tool:'MongoDB', 
     color:'f78922'
 }
 const MySQL ={
    tool:'MySQL', 
    color:'9932CC'
}

let projectData = [{
    index: 0,
    name: 'Bootcamp Box',
    summary: `A helpful dashboard for use in a web-development environment. Integrates multiple links, sites, and tools that are frequently used within a web-development lifestyle.`,
    tools: [HTML,JS,NODE,CSS,FB],
    imgsrc: '/images/BootCampBox.png',
    url: 'http://nubootcampbox.xyz',
    type: 'Group'
}, {
    index: 1,
    name: 'TrashParty ',
    summary: `NFT-style Webapp (for entertainment purposes): A website where once a day you open a pack of random stuff (data we collect from different API's). In the packs could be anywhere from songs to movies to pokemon cards, really any type of data we can get from an API and have time to implement. You can trade your "trash" with other users till you get items you actually like.`,
    tools: [JS,HB,NODE,CSS,FB,EXP,SESS],
    imgsrc: '/images/TrashParty.png',
    url: 'http://trashparty.xyz',
    type: 'Group'
}, {
    index: 2,
    name: 'WeatherBoard',
    summary: `A simple multi-city weather dashboard that allows a user to quickly search for weather information about a city of their choice.  
            This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
            `,
    tools: [JS,CSS,{tool:'LocalStorage',color:'000000'}, HTML],
    imgsrc: '/images/WeatherBoard.png',
    url: 'https://proto133.github.io/WeatherBoard/',
    type: 'Solo'
}, {
    index: 3,
    name: 'Note-O-Rama',
    summary: `A simple note-taking application using nodejs leveraging express as server-side middleware and routing framework.
    \n\n It is important to note that this application simply uses a JSON file as the database and is more of a conceptual application than a real solution.`,
    tools: [JS, CSS,NODE,HERO,HTML],
    imgsrc: '/images/Note-O-Rama.png',
    url: 'https://gentle-sierra-10975.herokuapp.com/',
    type: 'Solo'
}, {
    index: 4,
    name: 'Talkio',
    summary: `This web application is a simple "TechBlog". Log in, blog, comment and view comments.`,
    tools: [NODE, EXP, HB,MySQL,JS],
    imgsrc: '/images/Talkio.png',
    url: 'http://talkio-2021.herokuapp.com/',
    type: 'Solo'
},{
    index: 5,
    name: 'FitLogr',
    summary: `When you get home from the gym, go ahead and fire up your computer, launch FitLog and begin keeping track of your workouts! Never before has it been this easy to keep track of exercises and pursue physical wellbeing! Simply follow Fitlog's intuitive design and you're on your way to the body of a Greek Deity!`,
    tools: [NODE, EXP, HERO,MONGO,JS],
    imgsrc: '/images/Fitlogr.png',
    url: 'http://fitlogr.herokuapp.com/',
    type: 'Solo'}]

export default projectData;