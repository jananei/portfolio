import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import Photo from './953072.jpg';
import google from './google.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
class Home extends Component {

    render() {
        return (

            <div className="App mt-4">

                <div className="text-center mt-5">
                    <div>
                        <img src={Photo} width="10%" className="rounded-circle  mr-0 mt-4" alt="missing" />
                    </div>

                    <div className=" mr-0 mt-4">
                        <h3 className="text-white ">Jananei Selvakumar</h3>
                        <h4 className="text-info font-italic ">Web Developer</h4>
                        <a href="https://plus.google.com/u/0/settings">
                            <img src={google} className="image" alt="missing" />
                        </a>
                        <a href="https://www.linkedin.com/in/jananei-selvakumar-5b101a161/">
                            <img src={linkedin} className="image" alt="missing" />
                        </a>
                        <a href="https://twitter.com/jananeii">
                            <img src={twitter} className="image" alt="missing" />
                        </a>

                        <Media>
                            <Media.Body>
                                <p className="lead text-center text-white mr-0 mt-4 w-100 px-5" >
                                    <span className="display-4"> Hi, I am Jananei Selvakumar !</span><br />
                                    I'm a web Developer. I work majorly on javaScript, React JS and redux.<br />
                                    I'm interested in learning new technologies.<br />
                                    I'm a self-motivated person and always try to keep positive environment around me
                                </p>
                            </Media.Body>
                        </Media>
                    </div>

                </div>
            </div>
        );
    }
}
export default Home;