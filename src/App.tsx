import React, {FC, KeyboardEvent, useState} from "react";
import "./App.css";
import {Button, InputGroup, ListGroup, Stack, Form} from "react-bootstrap";
import {Item} from "./Item";

export const App: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [itemValue, setItemValue] = useState("");
  const [items, setItems] = useState<number[]>([]);

  const handleItemAdded = () => {
    if(itemValue != "") {
      setItems([Math.random(), ...items]);
      setInputValue("");
    }
  };

  const handleDeleteItem = (itemId: number) => {
    setItems((preItems) =>
      preItems.filter((id) => id != itemId)
    );
  };

  const handleInputKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleItemAdded();
      setInputValue("");
    }
  };

  return (
    <Stack gap={1}>
      <p className="fs-2">Best Todo Lists</p>
      <Stack direction="horizontal" gap={2}>
        <InputGroup>
          <Form.Control placeholder="Please enter to-do item" value={inputValue}
            onChange={event => {setInputValue(event.target.value); setItemValue(event.target.value);}}
            onKeyUp={handleInputKeyUp}
          />
        </InputGroup>
        <Button onClick={handleItemAdded}>Add</Button>
      </Stack>
      <ListGroup>
        {items.map(id =>
          <ListGroup.Item key={id}>
            <Item initContent={itemValue} handleDeleteItem={() => handleDeleteItem(id)}/>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Stack>
  );
};
