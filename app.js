const form = document.querySelector("form");
const firstNameField = form.querySelector(".firstNameField");
const firstNameInput = firstNameField.querySelector("input");
const firstNameError = firstNameField.querySelector(".error-txt");
const lastNameField = form.querySelector(".lastNameField");
const lastNameInput = lastNameField.querySelector("input");
const lastNameError = lastNameField.querySelector(".error-txt");
const emailField = form.querySelector(".emailField");
const emailInput = emailField.querySelector("input");
const emailError = emailField.querySelector(".error-txt");
const passwordField = form.querySelector(".passwordField");
const passwordInput = passwordField.querySelector("input");
const passwordError = passwordField.querySelector(".error-txt");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
    // console.log("form submitted");
})

function checkFirstName()
{
    if(firstNameInput.value == "")
    {
        firstNameField.classList.add("showError");
        firstNameError.innerText = "First Name cannot be empty";
    }
    else
    {
        firstNameField.classList.remove("showError");
    }
}
function checkLastName()
{
    if(lastNameInput.value == "")
    {
        lastNameField.classList.add("showError");
        lastNameError.innerText = "Last Name cannot be empty";
    }
    else
    {
        lastNameField.classList.remove("showError");
    }
}
function checkEmail()
{
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.value == "")
    {
        emailField.classList.add("showError");
        emailError.innerText = "Email cannot be empty";
    }
    else if(!emailInput.value.match(emailPattern))
    {
        emailField.classList.add("showError");
        emailError.innerText = "Looks like this is not an email";
    }
    else
    {
        emailField.classList.remove("showError");
    }
}
function checkPassword()
{
    if(passwordInput.value == "")
    {
        passwordField.classList.add("showError");
        passwordError.innerText = "Password cannot be empty";
    }
    else
    {
        passwordField.classList.remove("showError");
    }
}