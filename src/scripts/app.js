import TaskList from './components/task-list';
import TaskLists from './components/task-board';

let board = new TaskLists('board', {
    in: '.taskLists_src',
    out: '.taskLists_dist',
    taskList: '.taskList_src',
    taskList_dist: '.taskLists',
    createForm: '.listCreator'
});
