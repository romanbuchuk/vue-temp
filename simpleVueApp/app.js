
Vue.createApp({
    computed: {
        taskCount() {
            return this.tasks.length;
        },

    },
    // watch: {
    //     taskCount(value){
    //         if (value > 4) {
    //             const self = this;
    //
    //             setTimeout(() => {
    //                 self.tasks.splice(0, self.tasks.length);
    //             }, 2000);
    //         }
    //     }
    // },
    data() {
        return {
            tasks: [],
            enteredTask: '',
            isChecked: true,
        }
    },
    // methods: {
    //     addTask: () => {
    //
    //     }
    // },
    methods: {
        addTask() {
            const task = this.enteredTask;
            this.tasks.push(task);

            this.enteredTask = ''
            this.taskCount += 1;
        },
        /*updateTask(event) {
            this.enteredTask = event.target.value;
        },*/
        deleteTask(taskToDelete) {
            const indexToDelete = this.tasks.indexOf(taskToDelete);
            this.tasks.splice(indexToDelete, 1);
        }
    }
}).mount('#root');