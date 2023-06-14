import React, {FC, useState} from "react";
import {CloseButton, Form, Stack} from "react-bootstrap";

interface ItemProps {
    content: string,
    handleDeleteItem: () => void
}

export const Item: FC<ItemProps> = ({content, handleDeleteItem}) => {

  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Stack direction="horizontal" className="d-flex justify-content-between">
      <Stack direction="horizontal" gap={1}>
        <Form.Check onChange={() => setIsCompleted(!isCompleted)}/>
        <div
          className={isCompleted ? "text-decoration-line-through" : "text-decoration-none"}>{content}</div>
      </Stack>
      <CloseButton onClick={handleDeleteItem}/>
    </Stack>
  );
};
