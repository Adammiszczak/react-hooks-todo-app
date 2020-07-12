import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ListTodo = ({ todos, deleteTodo, editTodo, finishTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedVal, editValue] = useState("");

  return (
    <ListGroup className="my-3">
      {todos.map((todo, index) => (
        <ListGroup.Item key={index}>
          <div className={todo.isFinished ? "text-muted mb-2" : " mb-2"}>{todo.task}</div>
          <Button
            className="mx-1"
            variant="primary"
            size="sm"
            key={`editBtn${index}`}
            data-number={`editBtn${index}`}
            onClick={(event) => {
              console.log(event.target.dataset["number"]);
              setIsEdit(event.target.dataset["number"]);
            }}
            disabled={todo.isFinished}
          >
            Edit
          </Button>
          <Button
            className="mx-1"
            variant="danger"
            size="sm"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            Delete
          </Button>
          {todo.isFinished ? 
          (<Button
            className="mx-1"
            variant="danger"
            size="sm"
            onClick={() => {
              finishTodo(index);
            }}
          >
            Not Done
          </Button>) : 
          (<Button
            className="mx-1"
            variant="success"
            size="sm"
            onClick={() => {
              finishTodo(index);
            }}
          >
            Done
          </Button>)}

          {isEdit === `editBtn${index}` ? (
            <Form
              inline
              className="mt-2 textc-center justify-content-center"
              onSubmit={(event) => {
                event.preventDefault();
                setIsEdit(!isEdit);
                console.log(editedVal);
                editTodo(index, editedVal);
              }}
            >
              <Form.Control
                type="text"
                placeholder="Edit your todo"
                onChange={(event) => {
                  editValue(event.target.value);
                }}
              />
              <Button variant="primary" type="submit">
                Change
              </Button>
            </Form>
          ) : null}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListTodo;
