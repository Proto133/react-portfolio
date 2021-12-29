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
const GRAPHQL ={
    tool: 'GraphQL',
    color: 'b6b6b6'
}
const INQ={
    tool:'Inquirer',
    color: 'bac72a'
}
const NPM = {
    tool:'NPM',
    color: 'c73f2a'
}
const JQ = {
    tool:'JQuery',
    color:'34ebab'
}
let projectData = [{
    index: 0,
    name: 'Bootcamp Box',
    summary: `A helpful dashboard for use in a web-development environment. Integrates multiple links, sites, and tools that are frequently used within a web-development lifestyle.`,
    tools: [HTML,JS,NODE,CSS,FB],
    imgsrc: '../images/BootCampBox.png',
    url: 'http://nubootcampbox.xyz',
    type: 'Group',
    featured: true,
}, {
    index: 1,
    name: 'TrashParty ',
    summary: `NFT-style Webapp (for entertainment purposes): A website where once a day you open a pack of random stuff (data we collect from different API's). In the packs could be anywhere from songs to movies to pokemon cards, really any type of data we can get from an API and have time to implement. You can trade your "trash" with other users till you get items you actually like.`,
    tools: [JS,HB,NODE,CSS,FB,EXP,SESS],
    imgsrc: '../images/TrashParty.png',
    url: 'http://trashparty.xyz',
    type: 'Group',
    featured: true,
}, {
    index: 2,
    name: 'WeatherBoard',
    summary: `A simple multi-city weather dashboard that allows a user to quickly search for weather information about a city of their choice.  
            This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
            `,
    tools: [JS,CSS,{tool:'LocalStorage',color:'000000'}, HTML],
    imgsrc: '../images/WeatherBoard.png',
    url: 'https://proto133.github.io/WeatherBoard/',
    type: 'Solo',
    featured: false,
}, {
    index: 3,
    name: 'Note-O-Rama',
    summary: `A simple note-taking application using nodejs leveraging express as server-side middleware and routing framework.
    \n\n It is important to note that this application simply uses a JSON file as the database and is more of a conceptual application than a real solution.`,
    tools: [JS, CSS,NODE,HERO,HTML],
    imgsrc: '../images/Note-O-Rama.png',
    url: 'https://gentle-sierra-10975.herokuapp.com/',
    type: 'Solo',
    featured: true,
}, {
    index: 4,
    name: 'Talkio',
    summary: `This web application is a simple "TechBlog". Log in, blog, comment and view comments.`,
    tools: [NODE, EXP, HB,MySQL,JS],
    imgsrc: '../images/Talkio.png',
    url: 'http://talkio-2021.herokuapp.com/',
    type: 'Solo',
    featured: false,
},{
    index: 5,
    name: 'FitLogr',
    summary: `When you get home from the gym, go ahead and fire up your computer, launch FitLog and begin keeping track of your workouts! Never before has it been this easy to keep track of exercises and pursue physical wellbeing! Simply follow Fitlog's intuitive design and you're on your way to the body of a Greek Deity!`,
    tools: [NODE, EXP, HERO,MONGO,JS],
    imgsrc: '../images/Fitlogr.png',
    url: 'http://fitlogr.herokuapp.com/',
    type: 'Solo',
    featured: false,
},{
    index:6,
    name:'Vicebrary',
    summary:`A web app that allows the user to catalogue their personal vices, by adding from or adding to the community driven database (currently only Wine is supported).`,
    tools:[JS, NODE, EXP, GRAPHQL, MONGO, HERO],
    imgsrc:'../images/Vicebrary.png',
    url:'http://vicebrary.herokuapp.com/',
    type: 'Group',
    featured: true
},{
    index:7,
    name:'WritemeReadme',
    summary:`A console application that walks the users through creating a professional looking readme`,
    tools:[JS, NODE, INQ, NPM],
    imgsrc:'../images/code.png',
    url:'https://www.npmjs.com/package/writemereadme',
    type: 'Solo',
    featured: false

},{
    index:8,
    name:'More Coming Soon',
    summary:`I'm always working on learning and becoming a better developer.`,
    tools:[JS, NODE, FB, HTML,CSS, MONGO, EXP, GRAPHQL, HERO, HB, SESS, NPM],
    imgsrc:'../images/TensorBox292.png',
    url:'https://peterroto.com',
    // type: 'Solo',
    featured: true
},{
    index:9,
    name:'CSS Cheatseet',
    summary:`A static site that helps remind new devs about some CSS features that are sometimes difficult to remember.`,
    tools:[HTML,CSS],
    imgsrc:'../images/CSSCheatsheet.png',
    url:'https://proto133.github.io/CSS_CheatSheet/',
    type: 'Solo',
    featured: false
},{
    index:10,
    name:'Code Quiz',
    summary:`The Javascript Code Quiz is a fun and interactive way to test your basic javascript code skills. With 15 questions, it will challenge you as you progress through the quiz. Complete with localStorage calls, this application invites you to challenge your friends to see who can score the highest in the shorest amount of time. The fun could last for about 20 minutes . . . there's only 15 questions. However; the leaderboard updates to the most recent 3 users for bragging rights. It's a great way decent to brush up on those coding skills when there isn't anything else better to do ;)`,
    tools:[JS, HTML,CSS],
    imgsrc:'../images/CodeQuiz.png',
    url:'https://proto133.github.io/Code_Quiz/',
    type: 'Solo',
    featured: false
},{
    index:11,
    name:'WorkDay Scheduler',
    summary:`Single page scheduling application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.`,
    tools:[JS,HTML,CSS,JQ],
    imgsrc:'../images/Scheduler_screenshot.png',
    url:'https://proto133.github.io/Scheduler/',
    type: 'Solo',
    featured: false
}
// ,{
//     index:12,
//     name:'Incomplete',
//     summary:`TBD`,
//     tools:[JS, NODE, FB, HTML,CSS, MONGO, EXP, GRAPHQL, HERO, HB, SESS, NPM],
//     imgsrc:'../images/code.png',
//     url:'https://peterroto.com',
//     type: 'Solo',
//     featured: false
//}
]

export default projectData;