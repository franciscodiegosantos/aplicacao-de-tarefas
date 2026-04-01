import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  const { removeTask } = useContext(TaskContext);

  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <Link to={`/edit-task/${task.id}`}>Editar</Link>
      <button onClick={() => removeTask(task.id)}>Excluir</button>
    </div>
  );
};

export default TaskItem;