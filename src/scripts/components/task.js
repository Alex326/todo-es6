import createID from '../lib/createid';
import $ from 'jquery';


class Task {
    constructor(title, ui = '.task') {
        this.id = createID();
        this.ui = ui;
        this.title = title;
        this.isDone = false;
    }
}


export default Task;