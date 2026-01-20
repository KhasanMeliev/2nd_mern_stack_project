const fs = require("fs");
const path = require("path");

class userService {
  async getUsers() {
    return new Promise((resolve, reject) => {
      try {
        const file = path.join(__dirname, "./data.json");
        const users = JSON.parse(fs.readFileSync(file, "utf-8"));

        resolve(users);
      } catch (error) {
        reject(error);
      }
    });
  }
  async createUser() {}
  async getUserByID() {}
  async updateUser() {}
  async deleteUser() {}
}

module.exports = new userService();
