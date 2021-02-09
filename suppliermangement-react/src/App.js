import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from "./componets/RegisterSupllier";
import Listsuppliers from "./componets/ListSupplier";
import Editsuppllier from "./componets/Editsupplier";


function App() {
  return (<Router>
    <div className="App" >
      <header className="">
      <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-supplier"} className="nav-link">
                React MERN Crud App
              </Link>
            </Navbar.Brand>

            <Nav className="">
              

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/supplier-list"} className="nav-link">
                  Register List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>




      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={Register} />
                <Route path="/create-supplier" component={Register} />
                <Route path="/edit-supplier/:id" component={Editsuppllier} />
                <Route path="/supplier-list" component={Listsuppliers} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;