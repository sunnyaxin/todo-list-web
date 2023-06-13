import React, {FC, useState} from "react";
import "./App.css";
import {Button, InputGroup, ListGroup, Stack, Form, CloseButton} from "react-bootstrap";

interface Item {
    id: number,
    content: string,
    isCompleted: boolean
}

export const App: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<Item[]>([]);

  const handleItemChecked = (itemId: number) => {
    setItems((preItems) => 
      preItems.map((item) => item.id === itemId? {...item, isCompleted: !item.isCompleted}: item 
      ));
  };
  
  return (
    <Stack gap={1}>
      <p className="fs-2">Best Todo Lists</p>
      <Stack direction="horizontal" gap={2}>
        <InputGroup>
          <Form.Control placeholder="Please enter to-do item" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
        </InputGroup>
        <Button onClick={() => {
          setInputValue("");
          setItems([
            {
              id: items.length+1,
              content: inputValue,
              isCompleted: false
            },
            ...items
          ]);
        }}>Add
        </Button>
      </Stack>
      <ListGroup>
        {items.map(item =>
          <ListGroup.Item key={item.id}>
            <Stack direction="horizontal" className="d-flex justify-content-between">
              <Stack direction="horizontal" gap={1}>
                <Form.Check onChange={() => {handleItemChecked(item.id);}}/>
                <div className={item.isCompleted?"text-decoration-line-through":"text-decoration-none"}>{item.content}</div>
              </Stack>
              <CloseButton />
            </Stack>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Stack>
  );
};
