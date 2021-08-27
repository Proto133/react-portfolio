import {Link, Switch, HashRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import aboutData from './data/aboutData';
import projectData from './data/projectData';
import React from 'react';
import './App.css'
  
function App() {
    return (
    <div className="header">
     <Router>
       <nav>
         <Link to="/home">Home</Link>
         <Link to="/projects">Projects</Link>
         <Link to="/about">About</Link>
       </nav>
         <Switch>
          <Route exact path="/">
            <Redirect to="/home"/>
           </Route>
             <Route path="/home">
                 <Home />
             </Route>
             <Route path="/about">
                <About data={aboutData} />    
             </Route>
             <Route path="/projects">
                <Projects data={projectData}/>
             </Route>
             </Switch>
     </Router>
   </div>
    )

}

export default App;
