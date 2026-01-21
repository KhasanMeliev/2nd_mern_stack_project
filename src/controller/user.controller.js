const userService = require("../service/user.service");
const response = require("../utils/response.helper");

class userController {
  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      response.success(res, "Users fetched successfully", users);
    } catch (error) {
      response.internalServerError(res, error.message);
    }
  }

  async createUser(req, res) {
    try {
      const user = userService.createUser(req.body);
      // res.status(201).json({ message: "User created successfully" });
      response.created(res, "User created successfully", user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getUserByID(req, res) {}
  async updateUser(req, res) {}

  async deleteUser(req, res) {
    try {
      const user = userService.deleteUser(req.params.id);
      response.success(res, "User deleted successfully", user);
    } catch (error) {
      response.internalServerError(res, error.message);
    }
  }
}

module.exports = new userController();
