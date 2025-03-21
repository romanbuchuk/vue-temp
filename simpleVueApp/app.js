const myApp = Vue.createApp({
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
});

// myApp.component('task-item', {
//     template: `
//         <h2>Task Item</h2>
//         <p>Custom global component</p>
//     `,
// });

myApp.mount('#root');

const myApp2 = Vue.createApp({
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
});

myApp2.mount('#root2');

// let firstName = 'Roman';
// let lastName = 'Buchuk';
// let fullName = `${firstName} ${lastName}`;

// console.log(fullName);

// lastName = 'Shevchenko';
// fullName = `${firstName} ${lastName}`;

// console.log(fullName);
// const person = {
//     firstName: '',
//     lastName: '',
//     fullName: '',
// };
//
// const proxy = new Proxy(person, {
//     // get(target, prop) {
//     //     console.log('======================');
//     //     console.log(target);
//     //     console.log(prop);
//     //     console.log('======================');
//     //
//     //     if (prop === 'fullName') {
//     //         return target.firstName + '+++++' + target.lastName;
//     //     }
//     //
//     //     return target[prop];
//     // },
//     set(target, prop, value) {
//         if (prop === 'firstName' || prop === 'lastName') {
//             target[prop] = value;
//
//             if (!target.lastName) {
//                 target.fullName = target.firstName;
//             } else if (!target.firstName) {
//                 target.fullName = target.lastName;
//             } else {
//                 target.fullName = `${target.firstName} - ${target.lastName}`;
//             }
//         }
//     }
// });
//
// proxy.firstName = 'Roman';
//
// console.log(proxy);
// console.log(person.fullName);
//
// proxy.lastName = 'Buchuk';
// console.log(person.fullName);
// proxy.age = 34;
// console.log(person);