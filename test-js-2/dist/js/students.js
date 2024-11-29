let studentsSet = new Set();

function add() {
    let nameInput = document.getElementById("name");
    let studentListSelect = document.getElementById("studentList");

    studentsSet.add(nameInput.value);
    console.log(studentsSet);
    studentListSelect.innerHTML = "";
    for (let n of studentsSet) {
        studentListSelect.innerHTML += "<Option>" + n + "</Option>";
    }
}