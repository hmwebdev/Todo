export class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.todoList = new Array();
  }

  get getProjectName() {
    return this.name;
  }

  set setProjectName(name) {
    this.name = name;
  }

  addTodoList(list) {
    this.todoList.push(list);
  }
}

const brainstorm = new Project("Sans nom", "Best friggin project ever!");
brainstorm.setProjectName = "Eul Projat";

const getInfo = () => {
  return console.log(brainstorm.getProjectName);
};

export { getInfo };
