const authservice = require("../services/authService");

const register = async (req, res) => {
  try {
    const userData = req.body;

    const userId = await authservice.registerUser(userData);

    return res.status(201).json({
      message: "Successful!!",
      userId,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const login = async (req,res)=> {
  try {
    const userData = req.body;

    const {token, userId} = await authservice.loginUser(userData);

    return res.status(200).json({
      message : "Logging Successful!!",
      token,
      userId
    })

  } catch (error) {
    return res.status(500).json({error : error.message})
  }
};

module.exports = { register, login };
