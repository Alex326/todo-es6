import createID from '../lib/createid';


class Task {
    constructor(title) {
        this.id = createID();
        this.title = title;
    }
}

export default Task;