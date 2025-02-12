// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');
//
// const handleClick = () => {
//     const value = inputEl.value;
//     const listItem = document.createElement('li');
//
//     listItem.textContent = value;
//     listEl.appendChild(listItem);
//     inputEl.value = '';
// };
//
// buttonEl.addEventListener('click', handleClick);

Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: '',
            isChecked: true,
        }
    },
    /*methods: {
        addTask: function () {

        }
    }*/
    methods: {
        addTask(event) {
            const task = this.enteredTask;
            this.tasks.push(task);

            this.enteredTask = ''
        },
        deleteTask(taskToDelete) {
            const indexToDelete = this.tasks.indexOf(taskToDelete);
            this.tasks.splice(indexToDelete, 1);
        }
    }
}).mount('#root');