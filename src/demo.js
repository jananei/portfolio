import React, { Component } from 'react';
import crud from './crud.mov';
import cart from './cart.mov';
import token from './token.mov';
import zomato from './zomato.mov';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showModal = () => {
    var modal = document.getElementById('crudModal');

    modal.style.display = "block";

  }
  showCart = () => {
    var modal = document.getElementById('cartModal');

    modal.style.display = "block";
  }
  showToken = () => {
    var modal = document.getElementById('tokenModal');

    modal.style.display = "block";
  }
  showZomato = () => {
    var modal = document.getElementById('zomatoModal');

    modal.style.display = "block";
  }
  close = () => {
    var modal = document.getElementById('crudModal');

    modal.style.display = "none";

  }
  closeCart = () => {
    var modal = document.getElementById('cartModal');

    modal.style.display = "none";

  }
  closeToken = () => {
    var modal = document.getElementById('tokenModal');

    modal.style.display = "none";

  }
  closeZomato = () => {
    var modal = document.getElementById('zomatoModal');

    modal.style.display = "none";

  }

  render() {
    return (


      <div className="App mt-4 " >
        <div className=" mt-4">
          <Jumbotron className="bg-dark">
            <div >

            </div >
            <h2 className="text-center text-white"> Project Demo </h2>
            <hr />
            <p className="text-center text-white">
              Some of my project demo videos,
            </p>
            <hr />
            <Grid className="text-white">
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <video width="320" height="240" controls onClick={this.showModal}>
                    <source src={crud} />
                  </video>

                  <div id="crudModal" className="modal">


                    <div className="modal-content mt-5">
                      <span className="close" onClick={this.close} align="left">&times;</span>
                      <video controls >
                        <source src={crud} />
                      </video>
                    </div>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                  <h4 className="text-left">CRUD OPERATIONS</h4>
                  <p className="text-justify">
                    There should be a form to get user information and three button (add, save and reset) in the form.
                    Clicking upon add button, form details should be added in the table. While clicking on reset button the form fields should be cleared. Each row in the table should have edit button while clicking on edit button respective row info should get populated in the respective form field and changes
                    can be made after which clicking on save button, those changes should reflect on respective
      </p>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <video width="320" height="240" controls onClick={this.showCart}>
                    <source src={cart} />
                  </video>
                  <div id="cartModal" className="modal">


                    <div className="modal-content mt-5">
                      <span className="close" align="left" onClick={this.closeCart}>&times;</span>
                      <video controls >
                        <source src={cart} />
                      </video>
                    </div>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                  <h4 className="text-left">E-COMMERCE WEBSITE</h4>
                  <p className="text-justify">
                    A shopping website with 3 items and below each item product description, price and a add to cart button is provided. Clicking on add to cart, respective product gets added to cart and there is view cart bottom, while clicking on view cart, list of items added to cart will be viewed along with remove from cart button, which is used to delete item from cart.
                       And there is a home button to go back to shopping page.
                  </p>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <video width="320" height="240" controls onClick={this.showToken}>
                    <source src={token} />
                  </video>
                  <div id="tokenModal" className="modal">
                   <div className="modal-content  " >
                      <span className="close" align="left" onClick={this.closeToken}>&times;</span>
                      <video controls >
                        <source src={token} />
                      </video>
                    </div>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                  <h4 className="text-left">TOKEN SYSTEM</h4>
                  <p className="text-justify">
                    AUser is provided with two forms. First form has two input fileds, to enter name and phone number,
                     a button to generate unique Id and add button, to add above information along with entry time of user to
                     a table which is displayed on the right side. Table contains name, unique Id, entry time, exit time, cost and payment status. And second form have a search field in which the unique Id is entered and searched for user information on clicking get user information button,the respective user information is fetched from the table and displayed below the search field and exit time is captured during onclick and cost is calculated.
                     Payment status is updated with the help of paid button.
                  </p>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <video width="320" height="240" controls onClick={this.showZomato}>
                    <source src={zomato} />
                  </video>
                  <div id="zomatoModal" className="modal">

                    <div className="mt-5">
                      <div className="modal-content ">
                        <span className="close" align="left" onClick={this.closeZomato}>&times;</span>
                        <video controls >
                          <source src={zomato} />
                        </video>
                      </div>
                    </div>
                    </div>
                </Col>
                <Col xs={12} md={8}>
                  <h4 className="text-left ">ZOMATO</h4>
                  <p className="text-justify">
                    User is provided with two fields, to enter area and select cuisine in drop-down along
                     with search button. Upon entering area, user should be suggested with top cuisines in that area in a drop-down box.
                     After selecting cuisine and clicking on the search button,user should be provided with restaurant information using Zomato API.
                  </p>
                </Col>
              </Row>
            </Grid>
          </Jumbotron>

        </div>
      </div>
    )
  }
}
export default Demo;