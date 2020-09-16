import { getEngineTask, hasEngineTask, getEngineSubTasks } from '../core/engineManager';

import taskRnvRun from './task.rnv.run';
import taskRnvPackage from './task.rnv.package';
import taskRnvBuild from './task.rnv.build';
import taskRnvConfigure from './task.rnv.configure';
import taskRnvStart from './task.rnv.start';
import taskRnvExport from './task.rnv.export';
import taskRnvDeploy from './task.rnv.deploy';
import taskRnvDebug from './task.rnv.debug';

const TASKS = {};

const addTask = (taskInstance) => {
    TASKS[taskInstance.task] = taskInstance;
};

addTask(taskRnvRun);
addTask(taskRnvPackage);
addTask(taskRnvBuild);
addTask(taskRnvConfigure);
addTask(taskRnvStart);
addTask(taskRnvExport);
addTask(taskRnvDeploy);
addTask(taskRnvDebug);

const executeTask = async (c, task, parentTask, originTask) => getEngineTask(task, TASKS).fn(c, parentTask, originTask);

const hasTask = (task, isProjectScope) => hasEngineTask(task, TASKS, isProjectScope);

const getTask = task => getEngineTask(task, TASKS);

const getSubTasks = (task, exactMatch) => getEngineSubTasks(task, TASKS, exactMatch);

const getTasks = () => Object.values(TASKS);

const getId = () => 'engine-rn-web';

const title = 'Engine RN Web';

export default {
    executeTask,
    addTask,
    hasTask,
    getTask,
    getSubTasks,
    getTasks,
    getId,
    title
};