const router = require("express").Router();
const taskcontroller = require("../controllers/taskController");
const authenticate = require("../middleware/authenticateToken");

router.post("/", authenticate, taskcontroller.createTask);

router.get("/", authenticate, taskcontroller.getAllTasks);
router.get("/:id", authenticate, taskcontroller.getTaskById);

router.put("/:id", authenticate, taskcontroller.updateTask);
router.delete("/:id", authenticate, taskcontroller.deleteTask);

module.exports = router;
