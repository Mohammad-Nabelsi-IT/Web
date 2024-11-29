var employeesMap = new Map();
var tableBody = document.getElementById("tableBody");

function add() {
    var nameV = document.getElementById("name").value;
    var salaryV = document.getElementById("salary").value;
    var emailV = document.getElementById("email").value;
    var jobV = document.getElementById("job").value;
    var mobileV = document.getElementById("mobile").value;

    let emp = {
        name: nameV,
        salary: salaryV,
        email: emailV,
        job: jobV,
        mobile: mobileV,
    };

    employeesMap.set(++employeesMap.size, emp);

    tableBody.innerHTML = "";

    for (const elem of employeesMap) {
        tableBody.innerHTML += "<tr><td>" + elem[0] + "</td><td>" + elem[1].name
            + "</td><td>" + elem[1].email + "</td><td>" + elem[1].mobile
            + "</td><td>" + elem[1].job + "</td><td>" + elem[1].salary + "</td></tr>";
    }
}