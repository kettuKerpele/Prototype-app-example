

let lists = document.getElementById("output");
let newInput = document.getElementById("input");
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
const listMaker = text => {
let newTask = document.createElement("p");
newTask.textContent = text;
lists.appendChild(newTask);
//let btn = document.createElement("button");
//btn.innerHTML = "Poista";
//newTask.appendChild(btn);
//btn.setAttribute("onclick", "remove()")


//let kylla = document.createElement("button");
//kylla.innerHTML = "Kyllä";
//newTask.appendChild(kylla);
//kylla.setAttribute("onclick", "clickCounter()")


//let ei = document.createElement("button");
//ei.innerHTML = "Ei";
//newTask.appendChild(ei);
//ei.setAttribute("onclick", "clickCounter2()")
}

function add(event) {
event.preventDefault();

itemsArray.push(newInput.value)
localStorage.setItem('items', JSON.stringify(itemsArray))
listMaker(newInput.value);
document.getElementById("input").value = "";
}

data.forEach(item => {
listMaker(item)
})

function remove(event) {

//let deleteTask = this.event.currentTarget.parentNode;
//lists.removeChild(deleteTask);

//let result = itemsArray.indexOf( deleteTask.textContent);
//let newlist = itemsArray.splice(result, 1);

//localStorage.setItem('items', JSON.stringify(itemsArray))
window.localStorage.clear();
}


//function clickCounter() {
//    if (localStorage.clickcount) {
//      localStorage.clickcount = Number(localStorage.clickcount)+1;
//    } else {
//      localStorage.clickcount = 1;
//    }
//    document.getElementById("kylla").innerHTML = "Kyllä ääniä: " + localStorage.clickcount;
//}

//function clickCounter2() {
//    if (localStorage.clickcount2) {
//      localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
//    } else {
//      localStorage.clickcount2 = 1;
//    }
//    document.getElementById("ei").innerHTML = "Ei ääniä: " + localStorage.clickcount2;
//}












