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
            return new Handlebars.SafeString(`
                <li class="task" data-task-id=${task.id}>
                    <input type="checkbox" class="task__checkbox">
                    <span class="task__text">${task.title}</span>
                    <input type="button" class="task__button_delete" value="X">
                </li>`);
        });

        $(this.ui.createForm).submit(function (event){
            event.preventDefault();
            let value = $(this.elements.input).val();
            self.addTask(new Task(value));
        });
    }

    addTask(task) {
        this.tasks.push(task);
        const template = Handlebars.compile($(this.ui.task).html());
        $(this.ui.out).append(template({task: task}));

        const taskUi = $(`[data-task-id=${task.id}]`);

        taskUi.find('input:checkbox').change(function () {
            if(this.checked) {
                taskUi.addClass('task_isDone');
            }
            else {
                taskUi.removeClass('task_isDone');
            }
        });

        taskUi.find('input:button').click(function () {
            this.parentNode.remove();
        });
    }

}


export default TaskList;