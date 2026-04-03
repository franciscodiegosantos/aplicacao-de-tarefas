import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';
import AddTask from './pages/AddTask';

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;