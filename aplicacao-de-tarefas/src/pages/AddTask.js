// pages/AddTask.js
import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';

const AddTask = () => {
  const { addTask, editTask, tasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  // modo edição
  useEffect(() => {
    if (id && tasks.length > 0) {
      const existingTask = tasks.find(t => String(t.id) === id);
      if (existingTask) {
        setTask(existingTask);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      editTask({ ...task, id: Number(id) });
    } else {
      addTask({ ...task, id: Date.now() });
    }

    navigate('/');
  };

  return (
    <div className="container">
      <h1>{id ? 'Editar' : 'Adicionar'} Tarefa</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={task.title}
          onChange={(e) =>
            setTask({ ...task, title: e.target.value })
          }
        />

        <textarea
          placeholder="Descrição"
          value={task.description}
          onChange={(e) =>
            setTask({ ...task, description: e.target.value })
          }
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddTask;