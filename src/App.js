import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
import Home from './home.js';
import Projects from './projects.js';
import Stack from './stacks.js';
import Demo from './demo.js'


class App extends Component {



closeNav() {

  document.getElementById("mySidenav").style.width = "0";

}
openNav=()=> {

 document.getElementById("mySidenav").style.width = "250px";

}

  render() {

    return (
 
        <div >  
    <Router>
      <div>
    <div>
   
    {/* <nav className="navbar navbar-expand-sm bg-dark fixed-top "> */}
    <ul className="navBar fixed-top">
    <div className="screen">
    <li className="" >
    <h3  className="masthead-brand p-1">Jananei Selvakumar</h3>
    </li>
    
<span  className=" nav justify-content-end p-1">
  <li>
    <NavLink activeClassName="active" exact  className="nav-link" to="/">Home</NavLink>
    </li>
  <li ><NavLink activeClassName="active" className="nav-link" to="/projects">Projects</NavLink></li>
  <li ><NavLink activeClassName="active" className="nav-link" to="/stack">Stack</NavLink></li>
  <li ><NavLink activeClassName="active" className="nav-link" to="/demo">Projects Demo</NavLink></li>
</span>
</div>
</ul>
{/* </nav> */}

      <Route exact  path="/" component={Home} />
     <Route exact path="/projects" component={Projects} />
     <Route exact path="/stack" component={Stack} />
     <Route exact path="/demo" component={Demo} />
      {/* <Redirect from='/' to='/home'  /> */}
     </div>

<div className="mobileView bg-dark text-white " >

<div id="mySidenav" className="sidenav ">

 <span className="closebtn "  onClick={this.closeNav}>&times;</span> <br/>


 <NavLink activeClassName='active' exact to="">Home</NavLink>

 <NavLink activeClassName='active' to="/projects">Project</NavLink>

 <NavLink activeClassName='active' to="/stack">Stack</NavLink>

 <NavLink activeClassName='active' to="/demo">Projects Demo</NavLink>

</div>

<span onClick={this.openNav}>&#9776; </span> <strong className="masthead-brand ">Jananei Selvakumar</strong> 



</div>

</div>
</Router>



</div>








     

        
   
    );
  }
}

export default App;
