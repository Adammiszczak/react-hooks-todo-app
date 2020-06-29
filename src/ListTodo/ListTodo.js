import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

const ListTodo = ({todos, deleteTodo}) => (
    <ListGroup>
        {todos.map((todo, index) => (
            <ListGroup.Item key={index}>
                {todo}
                <Button variant="danger" size="sm" onClick={() => {
                    deleteTodo(index);
                }}>X</Button>
            </ListGroup.Item>


        ))}
    </ListGroup>

)

export default ListTodo
