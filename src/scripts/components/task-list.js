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
        const self = this;

        const template = Handlebars.compile($(this.ui.in).html());
        $(this.ui.out).html(template({tasks: this.tasks}));

        Handlebars.registerHelper('task-item', function(task) {
            console.log(task);
            return new Handlebars.SafeString(`
                <li class="task" data-task-id=${task.id}>
                    <input type="checkbox">
                    ${task.title}
                    <input type="button" value="X">
                </li>`);
        });

        $(this.ui.createForm).submit(function (event){
            event.preventDefault();
            let value = $(this.elements.input).val();
            self.addTask(new Task(value));
        });

        $('[data-task-id]').find('*:checkbox').change(function (event) {
            console.log(this);
        });
    }

    addTask(task) {
        this.tasks.push(task);
        const template = Handlebars.compile($(this.ui.task).html());
        $(this.ui.out).append(template({task: task}));
        console.log(this.tasks);
    }

}


export default TaskList;