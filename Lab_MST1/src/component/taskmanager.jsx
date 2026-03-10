import React, { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm };
}


function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const { values, handleChange, resetForm } = useForm({
    title: "",
    priority: "Low"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: values.title,
      priority: values.priority
    };

    setTasks([...tasks, newTask]);
    resetForm();
  };

  return (
    <div>
      <h2>Task Tracker</h2>

      <form onSubmit={handleSubmit}>
        <label>Task Title: </label>
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          required
        />

        <br />

        <label>Priority: </label>
        <select
          name="priority"
          value={values.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br />

        <button type="submit">Add Task</button>
      </form>

      <h3>Task List</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.title} | {task.priority}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;