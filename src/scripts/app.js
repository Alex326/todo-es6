import TaskList from './components/task-list';
import Task from './components/task';
import CreateForm from './components/task-form';

let ToDoList = new TaskList('ToDo', {
    in: '#taskList_src',
    out: '#taskList_dist',
    task: '#task_src',
    createForm: '.taskCreator'
});


ToDoList.addTask(new Task('Learn JavaScript'));
ToDoList.addTask(new Task('Learn HTML'));

new CreateForm('.taskCreator', Task, ToDoList.addTask);
