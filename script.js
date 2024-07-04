window.onload = function(){
    showTime();
    showDate();
    showTodo();
}
function showTodo(){
    const form = document.querySelector('#form-task');
    const input = document.querySelector('#form-task-input');
    const list_el = document.querySelector('#tasks');


    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input')
        task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

        task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
    })
}



function showTime(){
    const date = new Date();

var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";
if(h==0){
    h = 12;
}
if(h>12){
    h = h-12;
    session = "PM";
}
m = (m<10)?("0"+m) : m;
s = (s<10)?("0"+s) : s
h = (h<10)?("0"+h) : h;

const t = h+":"+m+":"+s+" "+session;
document.getElementById("time").innerHTML = t;

setTimeout(showTime, 1000);

}
function showDate(){
    const today = new Date();
    var date = today.getDate();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec'];
    const weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    document.getElementById("date").innerHTML = months[today.getMonth()]+"'"+date;
    document.getElementById("weekday").innerHTML = weekdays[today.getDay()]

    setTimeout(showDate, 1000);
}

