import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  const { removeTask } = useContext(TaskContext);

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <div className="task-actions">
        <Link to={`/edit-task/${task.id}`}>Editar</Link>
        <button onClick={() => removeTask(task.id)}>Excluir</button>
      </div>
    </div>
  );
};

export default TaskItem;