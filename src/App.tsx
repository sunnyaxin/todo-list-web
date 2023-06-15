import React, {FC, KeyboardEvent, useState} from "react";
import "./App.css";
import {Button, InputGroup, ListGroup, Stack, Form} from "react-bootstrap";
import {Item} from "./Item";

export const App: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<{ id: number, content: string }[]>([]);

  const handleItemAdded = () => {
    if(inputValue != "") {
      setInputValue("");
      setItems([
        {
          id: Math.random(),
          content: inputValue
        }
        , ...items]);
    }
  };

  const handleDeleteItem = (itemId: number) => {
    setItems((preItems) =>
      preItems.filter((item) => item.id != itemId)
    );
  };

  const handleInputKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleItemAdded();
    }
  };

  const handleUpdateItem = (itemId: number) => (content: string) => {
    setItems((preItems) =>
      preItems.map((item) => item.id === itemId ? {...item, content}: item)
    );
  };

  return (
    <Stack gap={1}>
      <p className="fs-2">Best Todo Lists</p>
      <Stack direction="horizontal" gap={2}>
        <InputGroup>
          <Form.Control placeholder="Please enter to-do item" value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            onKeyUp={handleInputKeyDown}
          />
        </InputGroup>
        <Button onClick={handleItemAdded}>Add</Button>
      </Stack>
      <ListGroup>
        {items.map(item =>
          <ListGroup.Item key={item.id}>
            <Item content={item.content} handleDeleteItem={() => handleDeleteItem(item.id)} handleUpdateItem={handleUpdateItem(item.id)}/>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Stack>
  );
};
