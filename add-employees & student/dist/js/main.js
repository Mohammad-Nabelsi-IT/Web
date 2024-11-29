var inputName = document.getElementById("name");
var studentsDiv = document.getElementById("students");

var studentsSet = new Set();

function add() {
    studentsSet.add(inputName.value);
    studentsDiv.innerHTML = "";
    for (const n of studentsSet) {
        studentsDiv.innerHTML += n + "<br>";
    }
}


var inputN = document.getElementById("n");
var inputD = document.getElementById("d");
var tableBody = document.getElementById("tableBody");

var studentsMap = new Map();
function addDegree() {
    studentsMap.set(inputN.value, inputD.value);
    tableBody.innerHTML = "";
    for (const e of studentsMap) {
        tableBody.innerHTML += "<tr><td>" + e[0] + "</td><td>" + e[1] + "</td></tr>";
    }
}