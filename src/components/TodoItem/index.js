import { useState } from "react";
//editIcon 추가
import { MdDone, MdDelete, MdEdit } from "react-icons/md";
import "./TodoItem.scss";

function TodoItem({ todo, onToggle, onUpdate, onRemove }) {
  const { id, content, done } = todo;
  //todo content 수정 위한 editIcon 추가되면서 isRemoveIconVisible의 변수명을 아래와 같이 바꿈
  const [isIconVisible, setIsIconVisible] = useState(false);

  //edit icon 클릭시 div -> input으로 변경
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  //todo content
  const [todoContent, setTodoContent] = useState(content);

  // input change 및 submit
  const onChangeContent = (e) => {
    setTodoContent(e.target.value);
  };
  const onSubmitContentUpdatedTodo = (e) => {
    e.preventDefault();
    onUpdate(id, todoContent);
    setIsTodoEditable(false);
  };

  return (
    <div
      className="item-block"
      onMouseEnter={() => setIsIconVisible(true)}
      onMouseLeave={() => setIsIconVisible(false)}
    >
      <div
        className={done ? "check-circle circle-done" : "check-circle"}
        onClick={() => onToggle(id)}
      >
        {done && <MdDone />}
      </div>
      <div className={done ? "content content-done" : "content"}>
        {isTodoEditable ? (
          <form onSubmit={onSubmitContentUpdatedTodo}>
            <input value={todoContent} onChange={onChangeContent} />
          </form>
        ) : (
          content
        )}
      </div>
      <div
        className="edit-icon"
        style={{ display: isIconVisible ? "initial" : "none" }}
        onClick={() => setIsTodoEditable(true)}
      >
        <MdEdit />
      </div>
      <div
        className="remove-icon"
        style={{ display: isIconVisible ? "initial" : "none" }}
        onClick={() => onRemove(id)}
      >
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;
