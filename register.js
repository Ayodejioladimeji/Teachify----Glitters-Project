const fullName = document.getElementById("fullName")
const email = document.getElementById("email")
const country = document.getElementById("country")
const gender = document.getElementById("gender")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

const submitForm = document.getElementById("submit")

let savedUser = JSON.parse(localStorage.getItem('users'));

submitForm.addEventListener('click', (e) => {
    e.preventDefault()

    if (fullName.value === "" || email.value === ""
        || country.value === "" || gender.value === ""
        || password.value === "" || confirmPassword.value === "") {
        alert("Kindly complete all fields");
        return false;
    }

    
    let userInfo = {
        fullName: fullName.value,
        email: email.value,
        country: country.value,
        gender: gender.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    console.log(userInfo);

    let registeredUser = [];
    const filteredSavedEmail = savedUser.filter(user => user.email == email.value )
    console.log(filteredSavedEmail)

    if (password.value !== confirmPassword.value) {
        alert('Password do not match')
    }  else if (filteredSavedEmail) { 
        alert('Email is already in use!')
    } else {
        if(localStorage.getItem('users') == null){
            registeredUser.push(userInfo);
            localStorage.setItem('users', JSON.stringify(registeredUser))
        } else {
            registeredUser = JSON.parse(localStorage.getItem('users'));
            registeredUser.push(userInfo);
            localStorage.setItem('users', JSON.stringify(registeredUser))
        }
        console.log(registeredUser);
        alert ('Registration completed, kindly log in')
        window.location.href = "login.html"
    }
})