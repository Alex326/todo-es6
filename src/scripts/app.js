import TaskList from './components/task-list';
import Task from './components/task';
import CreateForm from './components/task-form';


let ToDoList = new TaskList('ToDo', {
    in: '.taskList_src',
    out: '.taskList_dist',
    task: '.task_src',
    createForm: '.taskCreator'
});

let ToDoList2 = new TaskList('ToDo2', {
    in: '.taskList_src',
    out: '.taskList_dist2',
    task: '.task_src',
    createForm: '.taskCreator2'
});

ToDoList.addTask(new Task('Learn JavaScript'));
ToDoList.addTask(new Task('Learn HTML'));

ToDoList2.addTask(new Task('Learned JavaScript'));
ToDoList2.addTask(new Task('Learned HTML'));

new CreateForm('.taskCreator', Task, ToDoList.addTask);

new CreateForm('.taskCreator2', Task, ToDoList2.addTask);

