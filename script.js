let tasks = [];

let maxTasks = 20;
//add some dummy data in a loop
for (let i = 1; i <=maxTasks; i++) {
    tasks.push({ id: i, description: `This is task ${i}`, completed: false });
}

const taskContainer = document.querySelector('.tasks');

// MANI - this is known as even delegation - one event handler only 
// we check e.target to check what was clicked and trhen grab parent element id)
taskContainer.addEventListener('click', (e) => {
    let action = e.target.getAttribute('action');
    let taskId = parseInt(e.target.parentElement.parentElement.id);
    if (action === 'edit')
        editTask(taskId);
    else if (action === 'delete')
        deleteTask(taskId);
});

function editTask(taskId) {
    alert("edit " + taskId);
}
function deleteTask(taskId) {
    //alert("delete "+taskId);
    tasks = tasks.filter(ele => ele.id != taskId);
    displayTasks();
}

function displayTasks() {
    let tasksHtml = ''
    tasks.forEach(item => {
        tasksHtml += `
        <div class="task" id="${item.id}" title='${item.description}'>
            <div class="left-container">
                <p class="description">${item.description}</p>
            </div>
            <div class="right-container">
                <button class="action-buttons primary" action="edit">Edit</button>
                <button class="action-buttons danger" action="delete">Delete</button>
            </div>
        </div>`;
    });
    taskContainer.innerHTML = tasksHtml;
}

const addBtn = document.getElementById('add-task');
addBtn.addEventListener('click', () => {
    const text = document.getElementById('task-input').value;
    console.log(text);
    if (text != '') {
        const task = {
            id: getNewId(),
            description: `${text}`,
            completed: false
        };
        tasks.push(task);
        displayTasks();
    }
    else
        alert("description cannot be empty");
}
);

function getNewId() {
    if (tasks.length > 0)
        return Math.max(...tasks.map(task => task.id)) + 1;
    return 1;
}

displayTasks();