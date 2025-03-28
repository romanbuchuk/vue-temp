import {createRouter, createWebHistory} from 'vue-router'
import TasksView from '../views/TasksView.vue'
import TaskItemView from '../views/TaskItemView.vue'
import CreateTaskView from '../views/CreateTaskView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TasksView,
        },
        {
            path: '/task',
            name: 'task',
            component: CreateTaskView,
        },
        {
            path: '/task/:id',
            name: 'taskItem',
            component: TaskItemView,
        }
    ],
});

export default router
