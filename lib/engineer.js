const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github)
    {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = githubUsername;
    }
 getName() {
    return this.name;
  }
 getId() {
    return this.id;
  }

 getEmail() {
    return this.email;
  }

 getRole() {
    return 'Engineer';
 }
    getGithub() {
    return this.github
  }
};

module.exports = Engineer;