import createID from '../lib/createid';
import $ from 'jquery';
import Handlebars from 'handlebars';
import TaskList from './task-list';

class TaskLists {
    constructor(title, ui) {
        this.id = createID();
        this.title = title;
        this.ui = ui;
        this.lists = [];
        const self = this;

        const template = Handlebars.compile($(this.ui.in).html());
        $(this.ui.out).html(template({lists: this.lists}));

        $(this.ui.createForm).submit(function (event) {
            event.preventDefault();

            let value = $(this.elements.input).val();

            let taskList = new TaskList(value, {
                in: '.taskList_src',
                out: '.taskList_dist',
                task: '.task_src',
                createForm: '.taskCreator'
            });

            self.addList(taskList);
            $(this.elements.input).val('');
        });

        $('.button_save').click(function () {
            console.log(JSON.stringify(self.lists,null,'\t'));
            //serialize переделает обратно в объект
        });
    }

    addList(list) {
        this.lists.push(list);
        const template = Handlebars.compile($(this.ui.taskList).html());
        $(this.ui.taskList_dist).append(template({list: list}));
    }
}


export default TaskLists;