import createID from '../lib/createid';
import $ from 'jquery';


class Task {
    constructor(title, ui) {
        this.id = createID();
        this.ui = $('.task');
        this.title = title;
        this.isDone = false;
        // this.checkbox = $('.checkbox_ready');

    }
}

export default Task;