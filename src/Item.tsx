import React, {FC, KeyboardEvent, useEffect, useRef, useState} from "react";
import {CloseButton, Form, InputGroup, Stack} from "react-bootstrap";

interface ItemProps {
    initContent: string,
    handleDeleteItem: () => void,
}

export const Item: FC<ItemProps> = ({initContent, handleDeleteItem}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initContent);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsEditing(false);
      }
    };

    // 添加事件监听器
    document.addEventListener("click", handleClickOutside);

    // 移除事件监听器
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  const handleInputKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };
  
  if(!isCompleted && isEditing)
    return (
      <InputGroup>
        <Form.Control value={content} ref={inputRef}
          onChange={event => setContent(event.target.value)}
          onKeyUp={(event) => {handleInputKeyUp(event);}}
        />
      </InputGroup>
    );

  return (
    <Stack direction="horizontal" className="d-flex justify-content-between">
      <Stack direction="horizontal" gap={1}>
        <Form.Check onChange={() => setIsCompleted(!isCompleted)}/>
        <div onClick={(e) => {setIsEditing(true); e.nativeEvent.stopImmediatePropagation();}}
          className={isCompleted ? "text-decoration-line-through" : "text-decoration-none"}>
          {content}
        </div>
      </Stack>
      <CloseButton onClick={handleDeleteItem}/>
    </Stack>
  );
};
