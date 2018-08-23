import React, { Component } from 'react';

import javascript from './js.png';
import react from './react.png';
import sass from './sass.png';
import redux from './redux.png';
import css from './css.png';
import es6 from './es6.png';
import html from './html.png';
import mongodb from './mongodb.png';
import nodejs from './nodejs.png';
import reactbootstrap from './reactbootstrap.png';
import bootstrap from './bootstrap.jpg';
import { Jumbotron, Grid, Row, Col, Thumbnail } from 'react-bootstrap';

import './App.css';

class Stack extends Component {
    render() {
        return (  <div  className="App mt-4">
          <div  className=" mt-4">
            <div className=" justify-content-center mt-5" >
          
                <h2 className="text-center text-white justify-content-center">Stack</h2>
                <hr />
                <p className="text-center text-white justify-content-center">
                    I have worked with following technologies,
                </p>

                <Jumbotron className="text-white bg-dark text-centre  justify-content-center">    
                <div className=" justify-content-center">    
                <Grid className=" justify-content-center">
                <Row  className="justify-content-center">
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={html} />
                <h3 className="text-white">HTML</h3>
                </Col>
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={javascript} />
                <h3 className="text-white">javascript</h3>
                </Col>
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" className="App-logo" src={css} />
                <h3 className="text-white">CSS</h3>
                </Col>
                </Row>

                <Row  className="justify-content-center">
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={es6} />
                <h3 className="text-white">ES6</h3>
                </Col>
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={react} />
                <h3 className="text-white">React Js</h3>
                </Col>
              
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={redux} />
                <h3 className="text-white">Redux</h3>
                </Col>
           
                
                </Row>
                <Row  className="justify-content-center">
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={reactbootstrap} />
                <h3 className="text-white">React Bootstrap</h3>
                </Col>
              
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={sass} />
                <h3 className="text-white">SASS</h3>
                </Col>
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={bootstrap} />
                <h3 className="text-white "> Bootstrap</h3>
                </Col>

      
                </Row>
                </Grid>
                <Grid>
                <Row  className="justify-content-center">
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={nodejs} />
                <h3 className="text-white">Node js</h3>
                </Col>
              
                <Col xs={6} md={3}  className="justify-content-center">
                <Thumbnail href="#" alt="171x180" src={mongodb} />
                <h3 className="text-white">MongoDB</h3>
                </Col>
                <Col xs={6} md={3}  className="justify-content-center">
                {/* <Thumbnail href="#" alt="171x180" src={mongodb} /> */}
                <h3 className="text-white "> </h3>
                </Col>

      
                </Row>
                </Grid>

</div>
                </Jumbotron>
</div>
            </div>
            </div>
        );
    }
}
export default Stack;