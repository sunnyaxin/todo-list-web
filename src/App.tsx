import React, {FC, useState} from "react";
import "./App.css";
import {Button, Container, InputGroup, ListGroup, Navbar, Stack, Form, CloseButton} from "react-bootstrap";

export const App: FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  
  return (
    <Stack gap={1}>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Best Todo Lists</Navbar.Brand>
        </Container>
      </Navbar>
      <Stack direction="horizontal" gap={3}>
        <InputGroup>
          <Form.Control placeholder="Please enter to-do item" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
        </InputGroup>
        <Button onClick={() => {
          setInputValue("");
          setTodos([inputValue, ...todos]);
        }}>Add
        </Button>
      </Stack>
      <ListGroup>
        {todos.map(todo =>
          <ListGroup.Item key={todo}>
            <Stack direction="horizontal" className="d-flex justify-content-between">
              <Stack direction="horizontal" gap={1}>
                <Form.Check/>
                {todo}
              </Stack>
              <CloseButton />
            </Stack>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Stack>
  );
};
