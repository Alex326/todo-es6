import createID from '../lib/createid';
import $ from 'jquery';
import Handlebars from 'handlebars';
import CreateForm from './task-form';
import Task from './task';

class TaskList extends CreateForm {
    constructor(title, ui) {
        super(ui.createForm);
        this.id = createID();
        this.title = title;
        this.tasks = [];
        this.ui = ui;

        const template = Handlebars.compile($(this.ui.in).html());
        $(this.ui.out).html(template({tasks: this.tasks}));

        Handlebars.registerHelper('task', function(title) {
            return new Handlebars.SafeString(`<li>${title}</li>`);
        });

        const self = this;
        $(this.ui.createForm).submit(function (event){
            event.preventDefault();
            let value = $(this.elements.input).val();
            self.addTask(new Task(value));
        });
    }

    addTask(task) {
        this.tasks.push(task);
        const template = Handlebars.compile($(this.ui.task).html());
        $(this.ui.out).append(template({title: task.title}));
        console.log(this.tasks);
    }

}


export default TaskList;