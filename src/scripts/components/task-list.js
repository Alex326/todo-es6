import createID from '../lib/createid';
import $ from 'jquery';
import Handlebars from 'handlebars';
import Task from './task';

class TaskList {
    constructor(title, ui) {
        this.id = createID();
        this.title = title;
        this.tasks = [];
        this.ui = ui;

        const self = this;



        Handlebars.registerHelper('task-item', function(task) {
            const template = Handlebars.compile($(this.ui.task).html())({task: task});
            return new Handlebars.SafeString(template);
        });

        Handlebars.registerHelper('task-list', function(taskList) {
            const template = Handlebars.compile($(this.ui.in).html())({list: taskList});
            return new Handlebars.SafeString(template);
        });

        setTimeout(()=>
            $(`[data-list-id=${this.id}]`).find($(this.ui.createForm)).submit(function (event){
                event.preventDefault();
                let value = $(this.elements.input).val();
                self.addTask(new Task(value));
                $(this.elements.input).val('');
            }),1);



        this.load();
        this.save();
    }

    addTask(task) {
        this.tasks.push(task);
        const template = Handlebars.compile($(this.ui.task).html());
        $(`[data-list-id=${this.id}]`).find(this.ui.out).append(template({task: task}));

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

    save(){
        let value = JSON.stringify(this.tasks);
        console.log(value);
        // localStorage.setItem(key,value);
        localStorage.setItem('tasks',value);
    }

    load(){
        // let len = localStorage.length;
        // if(len > 0) {
        //     for(var i = 0; i<len; i++) {
        //         let key = localStorage.key(i);
        //         let value = localStorage.value(i);
        //     }
        // }
    }
}


export default TaskList;