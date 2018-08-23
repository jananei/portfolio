import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './react.png';
import './redux.png';
import './js.png';
class Projects extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }
  render() {
    return (

      <div className="App mt-4"  >
        <div className=" mt-4">
          <h1 className="text-center text-white">Projects</h1>
          <hr />
          <p className="text-center text-white">
            Following are the sample projects created,
            </p>
          <Jumbotron className="bg-dark">
            <div>
              <div>
                <div className="card">
                  <div className="card-header">
                    Project 1
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">DYNAMIC TABLE CREATION</h5>
                    <div className="card-text">

                      <p className="mb-1 lead text-left"><u>Requirements</u></p>
                      <p className="card-text mb-auto text-justify ">Row information should be kept in an array and
                      generate a table by iterating the array. Each row should have an view button by clicking on the button,
                      respective row information has to be displayed
                      to the user and also a delete button to delete the respective row</p>
                      <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                      <p className=" text-left"> HTML,CSS, JavaScript</p></div>

                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  Project 2
               </div>
                <div className="card-body">
                  <h5 className="card-title">CRUD OPERATIONS</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">There should be a form to get user information and three button
                    (add, save and reset) in the form. Clicking upon add button, form inputs should be added in the table which
                    is displayed below the form. While clicking on reset button the form fields should be cleared. Each row in the
                    table should have edit button while clicking on edit button respective row info should get populated in the respective
                     form field and changes can be made after which clicking on save button,
               those changes should reflect on respective rows.</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> HTML,CSS, JavaScript</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 3
                </div>
                <div className="card-body">
                  <h5 className="card-title">E-COMMERCE WEBSITE</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">A shopping website with 3 items and below each item
                    product description, price and a add to cart button is provided. Clicking on add to cart, respective product
                    gets added to cart and view cart bottom is provided to user to view the list of items added to cart along with
                    remove from cart button, which is used to delete item from cart.
              And there is a home button to go back to shopping page.</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> HTML,CSS, JavaScript</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 4
                </div>
                <div className="card-body">
                  <h5 className="card-title">WEATHER FORECAST APP</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">User is provided with input text box to enter location and search button to get weather information
            that particular location. This task is performed by fetching information from AccuWeather API.</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> HTML,CSS, JavaScript</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 5
                 </div>
                <div className="card-body">
                  <h5 className="card-title">WEATHER FORECAST APP</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">User is provided with input text box to enter location and search button to get weather information
            that particular location. This task is performed by fetching information from AccuWeather API.</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> HTML,CSS, JavaScript</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 6
              </div>
                <div className="card-body">
                  <h5 className="card-title">CRUD OPERATIONS using REACT JS</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">There should be a form to get user information and three button (add, save and reset) in the form.
                  Clicking upon add button, form details should be added in the table. While clicking on reset button
                  the form fields should be cleared. Each row in the table should have edit button while clicking on
                  edit button respective row info should get populated in the respective form field and changes can
            be made after which clicking on save button, those changes should reflect on respective</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> React js</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 7
  </div>
                <div className="card-body">
                  <h5 className="card-title">TO-DO LIST</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">User is provided with input text box to enter
                  their task along with add button to add their task to the list which will be displayed
            below and can delete task upon clicking on those task after completion.</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left">React js and Redux</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 8
  </div>
                <div className="card-body">
                  <h5 className="card-title">E-COMMERCE WEBSITE(REDUX)</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">A shopping website with 3 items and below each item product description, price and
                  a add to cart button is provided. Clicking on add to cart, respective product gets added to
                  cart and there is view cart bottom, while clicking on view cart, list of items added
                  to cart will be viewed along with remove from cart button, which is used to delete item from cart.
            And there is a home button to go back to shopping page.</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> React js and redux, react bootstrap</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 9
  </div>
                <div className="card-body">
                  <h5 className="card-title">TOKEN SYSTEM</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">User is provided with two forms. First form has two input fileds, to enter name and phone number,
                  a button to generate unique Id and add button, to add above information along with entry time of
                  user to a table which is displayed on the right side. Table contains name, unique Id, entry time,
                  exit time, cost and payment status. And second form have a search field in which the unique Id is entered and searched for user information on clicking get user information button,the respective user information is fetched from the table and displayed below the search field and exit time is captured during onclick and cost is calculated.
            Payment status is updated with the help of paid button.</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> React js and redux, react bootstrap</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 10
                </div>
                <div className="card-body">
                  <h5 className="card-title">ZOMATO</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">User is provided with two fields, to enter area and select
                    cuisine in drop-down along with search button. Upon entering area, user should be suggested with top cuisines
                    in that area in a drop-down box. After selecting cuisine and clicking on the search button,
              user should be provided with restaurant information using Zomato API</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> React js and redux, react bootstrap</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 11
                </div>
                <div className="card-body">
                  <h5 className="card-title">API CREATION USING NODE JS</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">Create api and perform crud operations in employee details using 
                    postman</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> Node js</p></div>

                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Project 12
                </div>
                <div className="card-body">
                  <h5 className="card-title">API CREATION USING NODE JS AND MONGODB</h5>
                  <div className="card-text">

                    <p className="mb-1 lead text-left"><u>Requirements</u></p>
                    <p className="card-text mb-auto text-justify ">Create api to add notes and perform crud operations in mongodb using 
                    postman</p>
                    <p className="mb-1 lead text-left"><u>Tools and technologies used:</u></p>
                    <p className=" text-left"> Node js, Mongodb</p></div>

                </div>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div>


    );
  }
}
export default Projects;