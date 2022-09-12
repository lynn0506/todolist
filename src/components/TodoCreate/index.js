import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoCreate.scss";

function TodoCreate({ onCreate }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onCreate(content);
    }
    setContent("");
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="insert-form-positioner">
          <form className="insert-form" onSubmit={onSubmit}>
            <input
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </form>
        </div>
      )}
      <button
        className={open ? "circle-button button-open" : "circle-button"}
        onClick={() => setOpen(!open)}
      >
        <MdAdd />
      </button>
    </>
  );
}

export default TodoCreate;
