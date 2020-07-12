import React, { useState } from "react";
import "./App.css";
import ListTodo from "./ListTodo/ListTodo";
import FormTodo from "./FormTodo/FormTodo";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainNav() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">
              <Link className="nav-link" to="/">
                Home page
              </Link>
            </Nav.Link>
            <Nav.Link href="/about">
              <Link className="nav-link" to="/about">
                About project
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

function Home() {
  const [todos, setTodos] = useState([{"todoId": 1, isFinished: false, task: "First Default Task"}]);

  return (
    <Container
      fluid={true}
      className="d-flex flex-column vh-100 align-items-center justify-content-center"
    >
      <Row className="text-center my-5">
        <Col className="text-center">
          <h1>React ToDo App with hooks</h1>
          <FormTodo
            saveTodo={(todoText) => {
              const trimmedText = todoText.task.trim();

              if (trimmedText.length > 0) {
                setTodos([...todos, {"todoId": todos.length + 1,"task":trimmedText,"isFinished" : false}]);
              }
            }}
          />
          <ListTodo
            todos={todos}
            editTodo={(todoIndex, editedValue) => {
              console.log(todoIndex);
              let editedTodos = [...todos];
              editedTodos[todoIndex].task = editedValue;
              console.log(editedValue);
              setTodos(editedTodos);
            }}
            deleteTodo={(todoIndex) => {
              const newTodos = todos.filter((el, index) => index !== todoIndex);
              setTodos(newTodos);
            }}
            finishTodo={(todoIndex) => {
              let editedTodos = [...todos];
              editedTodos[todoIndex].isFinished = !editedTodos[todoIndex].isFinished;
              console.log(editedTodos[todoIndex].isFinished);
              setTodos(editedTodos);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

function About() {
  return (
    <Container
      fluid={true}
      className="d-flex vh-100 align-items-center justify-content-center"
    >
      <Row lg={12} className="text-center">
        <Col className="text-center">
          <h1>About Page</h1>
        </Col>
      </Row>
    </Container>
  );
}

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
