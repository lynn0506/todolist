import { useState } from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import './TodoItem.scss';

function TodoItem({ id, done, text }) {
  const [isShowRemove, setIsShowRemove] = useState(false);

  return (
    <div
      className="item-block"
      onMouseOver={() => setIsShowRemove(true)}
      onMouseLeave={() => setIsShowRemove(false)}
    >
      <div className={done ? 'check-circle circle-done' : 'check-circle'}>
        {done && <MdDone />}
      </div>
      <div className={done ? 'text text-done' : 'text'}>{text}</div>
      <div
        className="remove"
        style={{ display: isShowRemove ? 'initial' : 'none' }}
      >
        <MdDelete />
      </div>
    </div>
  );
}

export default TodoItem;