import React, { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 border rounded-lg w-[80%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">To-Do List</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border-2 w-full p-2 rounded-md mb-4"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAddTask}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Task
        </button>

        <ul className="mt-4 space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className={`p-2 ${task.completed ? 'line-through bg-gray-200' : 'bg-white'} flex justify-between items-center rounded-md shadow-md`}>
              <span onClick={() => toggleComplete(task.id)} className="cursor-pointer text-gray-800">
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="ml-4 text-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
