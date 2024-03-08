const Task = require("../models/Task");

const createTask = async (taskData) => {
  try {
    const task = await Task.create(taskData);

    return task;
  } catch (error) {
    throw error;
  }
};

const getAllTasks = async (userId) => {
  try {
    const tasks = await Task.find({ userId });

    return tasks;
  } catch (error) {
    throw error;
  }
};

const getTaskById = async (id, userId) => {
  try {
    const task = await Task.findOne({ userId, _id: id });

    return task;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (id, userId, updateData) => {
  try {
    const task = await Task.findOneAndUpdate(
      { userId, _id: id },
      { $set: updateData },
      { new: true }
    );

    return task;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (id, userId) => {
  try {
    const task = await Task.findOneAndDelete({ userId, _id: id });

    return task;
  } catch (error) {
    throw error;
  }
};

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };
