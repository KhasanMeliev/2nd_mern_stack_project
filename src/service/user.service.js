const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const filePath = path.join(__dirname, "./data.json");
class userService {
  async getUsers() {
    return new Promise((resolve, reject) => {
      try {
        const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        resolve(users);
      } catch (error) {
        reject(error);
      }
    });
  }

  async createUser(userData) {
    return new Promise((resolve, reject) => {
      try {
        const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const newUser = { id: uuidv4(), ...userData };
        users.push(newUser);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        resolve(newUser);
      } catch (error) {
        reject(error);
      }
    });
  }
  async getUserByID() {}
  async updateUser() {}
  async deleteUser(userId) {
    return new Promise((resolve, reject) => {
      try {
        const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
        const filteredUsers = users.filter(
          (user) => user.id !== Number(userId),
        );
        fs.writeFileSync(filePath, JSON.stringify(filteredUsers, null, 2));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = new userService();
