const taskservice = require("../services/taskService");

const createTask = async (req, res) => {
  try {
    const { title, description, isCompleted, priority } = req.body;
    const userId = req.user.userId;
    const task = await taskservice.createTask({
      title,
      description,
      isCompleted,
      priority,
      userId,
    });

    return res.status(201).json(task);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const userId = req.user.userId;
    const tasks = await taskservice.getAllTasks(userId);

    return res.status(200).json(tasks);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const getTaskById = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = req.user.userId;
    const task = await taskservice.getTaskById(id, userId);

    if (!task) return res.status(404).json({ message: "Not found." });

    return res.status(200).json(task);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
    const {id} = req.params;

    try {
        const userId = req.user.userId;
        const updateData = req.body;

        const task = await taskservice.updateTask(id, userId, updateData);

        if (!task) return res.status(404).json({message : "Not found."});

        return res.status(200).json(task);
    } catch (error) {
        return res.json({ message: error.message });  
    }
};

const deleteTask = async (req, res) => {
    const {id} = req.params;

    try {
        const userId = req.user.userId;

        const task = await taskservice.deleteTask(id, userId);

        if (!task) return res.status(404).json({message : "Not found."});

        return res.sendStatus(204);
    } catch (error) {
        return res.json({ message: error.message });  
    }
};
module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };
