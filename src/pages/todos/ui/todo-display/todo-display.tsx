import { memo, useEffect, useRef, useState, type MouseEvent } from "react";
import {
  TODO_DISPLAY_MODE,
  type TodoDisplayMode,
} from "../../types/todo-display-types";
import type { Todo } from "@/entities/todo";

interface TodoDisplayProps {
  text: Todo["text"];
  updateText: (_: string) => void;
}

export const TodoDisplayMemo = memo(TodoDisplay);

export function TodoDisplay(props: TodoDisplayProps) {
  const { text, updateText } = props;
  const [mode, setMode] = useState<TodoDisplayMode>(
    text === null ? TODO_DISPLAY_MODE.edit : TODO_DISPLAY_MODE.view,
  );

  const viewRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setMode(TODO_DISPLAY_MODE.edit);
  };

  useEffect(() => {
    if (mode === TODO_DISPLAY_MODE.edit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [mode]);

  if (mode === TODO_DISPLAY_MODE.view) {
    return (
      <div ref={viewRef} onClick={handleClick}>
        {text}
      </div>
    );
  }
  const handleBlur = () => {
    setMode(TODO_DISPLAY_MODE.view);
    updateText(inputRef.current?.value ?? "");
  };

  return (
    <input
      style={{ width: "80%", height: "25px" }}
      ref={inputRef}
      type="text"
      defaultValue={text ?? ""}
      onBlur={handleBlur}
    />
  );
}
