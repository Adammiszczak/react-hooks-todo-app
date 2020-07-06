import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormTodo({ saveTodo }) {
    const [value, setTodo] = useState('');

    return (
        <Form
            className="border"
            onSubmit={(event) => {
                event.preventDefault();
                saveTodo(value);
                setTodo('');
            }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Single ToDo Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Todo" onChange={(event) => {
                    setTodo(event.target.value);
                }} value={value} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default FormTodo;
