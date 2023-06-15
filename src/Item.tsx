import React, {FC, useState} from "react";
import {CloseButton, Form, InputGroup, Stack} from "react-bootstrap";

interface ItemProps {
    content: string, // todo
    handleDeleteItem: () => void,
    handleUpdateItem: (content: string) => void
}

export const Item: FC<ItemProps> = ({content, handleDeleteItem, handleUpdateItem}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Stack direction="horizontal" className="d-flex justify-content-between">
      {(!isCompleted && isEditing) ?
        <InputGroup>
          <Form.Control value={content}
            onChange={event => {handleUpdateItem(event.target.value);}}
            onKeyUp={(event) => {if (event.key === "Enter") setIsEditing(false);}} //todo cancel edit
          />
        </InputGroup> :
        <Stack direction="horizontal" gap={1}>
          <Form.Check onChange={() => setIsCompleted(!isCompleted)}/>
          <div onClick={() => {setIsEditing(true);}} className={isCompleted ? "text-decoration-line-through" : "text-decoration-none"}>
            {content}
          </div>
        </Stack>
      }
      <CloseButton onClick={handleDeleteItem}/>
    </Stack>
  );
};
