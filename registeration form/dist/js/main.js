function validatName() {
    var inputName = document.getElementById("name");
    var nameError = document.getElementById("name-error");



    if (inputName.value == "") {
        nameError.innerHTML = "Name is Requierd";
        inputName.style.setProperty("border-color", "red");
    } else {
        nameError.innerHTML = "";
        inputName.style.setProperty("border-color", "rgba(128, 128, 128, 0.348)");
    }



}
function validatEmail() {
    var inputEmail = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    var email = inputEmail.value.trim();


    if (email == "") {
        emailError.innerHTML = "Email is Requierd";
        inputEmail.style.setProperty("border-color", "red");
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.innerHTML = "Invalid Email Address";
        inputEmail.style.setProperty("border-color", "red")
    } else {
        emailError.innerHTML = "";
        inputEmail.style.setProperty("border-color", "rgba(128, 128, 128, 0.348)");
    }
}
function validate() {
    validateName();
    validateEmail()
}