import React, {FC, KeyboardEvent, useState} from "react";
import {CloseButton, Form, InputGroup, Stack} from "react-bootstrap";

interface ItemProps {
    initContent: string,
    handleDeleteItem: () => void,
}

export const Item: FC<ItemProps> = ({initContent, handleDeleteItem}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initContent);
  
  const handleInputKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };
  
  if(!isCompleted && isEditing)
    return (
      <InputGroup>
        <Form.Control value={content}
          onChange={event => setContent(event.target.value)}
          onKeyUp={(event) => {handleInputKeyUp(event);}} //todo cancel edit
        />
      </InputGroup>
    );

  return (
    <Stack direction="horizontal" className="d-flex justify-content-between">
      <Stack direction="horizontal" gap={1}>
        <Form.Check onChange={() => setIsCompleted(!isCompleted)}/>
        <div onClick={() => {setIsEditing(true);}} 
          className={isCompleted ? "text-decoration-line-through" : "text-decoration-none"}>
          {content}
        </div>
      </Stack>
      <CloseButton onClick={handleDeleteItem}/>
    </Stack>
  );
};
