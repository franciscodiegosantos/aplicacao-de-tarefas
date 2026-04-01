import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';
import TaskItem from '../components/TaskItem';

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <Link to="/add-task">Adicionar Tarefa</Link>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada</p>
      ) : (
        tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default Home;