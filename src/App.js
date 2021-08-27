import {Link, Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
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
         <Link to="/react-portfolio/">Home</Link>
         <Link to="/react-portfolio/projects">Projects</Link>
         <Link to="/react-portfolio/about">About</Link>
       </nav>
         <Switch>
         <Route exact path='/react-portfolio/'>
             <Redirect to='/react-portfolio/home'></Redirect>
           </Route>
           <Route exact path='/'>
             <Redirect to='/react-portfolio/home'></Redirect>
           </Route>
             <Route path="/react-portfolio/home">
                 <Home />
             </Route>
             <Route path="/react-portfolio/about">
                <About data={aboutData} />    
             </Route>
             <Route path="/react-portfolio/projects">
                <Projects data={projectData}/>
             </Route>
             </Switch>
     </Router>
   </div>
    )

}

export default App;
