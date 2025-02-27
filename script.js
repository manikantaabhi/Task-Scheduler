let tasks=[
    {id:1,description:'This is task one',completed:false},
    {id:2,description:'This is task two',completed:false},
    {id:3,description:'This is task Three',completed:false}
]
function displayTasks(){
    const taskContainer=document.querySelector('.task-container');
    taskContainer.innerHTML='';
    tasks.forEach(element => {
        const task=document.createElement('div');
        task.className='task';

        const leftContainer = document.createElement('div');
        leftContainer.className='left-container';

        const description=document.createElement('p');
        description.className='description';
        description.textContent=element.description;

        leftContainer.appendChild(description);

        task.appendChild(leftContainer);

        const rightContainer = document.createElement('div');
        rightContainer.className='right-container';

        const editButton=document.createElement('button');
        editButton.className='action-buttons primary';
        editButton.id=`edit-task-${element.id}`;
        editButton.textContent='Edit';
        editButton.addEventListener('click',()=>
        {
            editTask(element.id);
        });

        const deleteButton=document.createElement('button');
        deleteButton.className='action-buttons danger';
        deleteButton.id=`delete-task-${element.id}`;
        deleteButton.textContent='Delete';
        deleteButton.addEventListener('click',()=>
        {
            deleteTask(element.id);
        });

        rightContainer.appendChild(editButton);
        rightContainer.appendChild(deleteButton);

        task.appendChild(rightContainer);

        taskContainer.appendChild(task);
    });

    function editTask(taskId){
        alert("edit "+taskId);
    }
    function deleteTask(taskId){
        //alert("delete "+taskId);
        tasks=tasks.filter(ele=> ele.id!=taskId);
        displayTasks();
    }
}

displayTasks();

const addBtn=document.getElementById('add-task');
addBtn.addEventListener('click',()=>
{
   const text= document.getElementById('task-input').value;
    console.log(text);
    if(text!=''){
    const task={
        id:getNewId(),
        description:`${text}`,
        completed:false
    };
    tasks.push(task);
    displayTasks();
    }   
    else
        alert("description cannot be empty");
}
);

function getNewId()
{
    if(tasks.length>0)
        return Math.max(...tasks.map(task=>task.id))+1;
    return 1;
}