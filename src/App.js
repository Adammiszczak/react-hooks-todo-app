import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainNav() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><Link className="nav-link" to="/">Home page</Link></Nav.Link>
            <Nav.Link href="/about"><Link className="nav-link" to="/about">About project</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

function Home() {
  return (
        <Container fluid={true} className="d-flex vh-100 align-items-center justify-content-center">
        <Row lg={12}  className="text-center">
          <Col className="text-center">
          <h1>React ToDo App with hooks</h1>
          </Col>
        </Row>
      </Container>
  );
};

function About() {
  return (
    <Container fluid={true} className="d-flex vh-100 align-items-center justify-content-center">
      <Row lg={12}  className="text-center">
        <Col className="text-center">
        <h1>About Page</h1>
        </Col>
      </Row>
    </Container>
  );
};

function App() {
  return (
    <div className="App">
      <Router basename="/react-hooks-todo-app/">
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
