const email = document.getElementById("email")
const password = document.getElementById("password")
const signIn = document.getElementById("login")

let finalUser = JSON.parse(localStorage.getItem('users'));

signIn.addEventListener('click', (e) => {
    e.preventDefault();

    const filteredArray = finalUser.filter(user =>
    user.email == email.value && user.password == password.value)
    console.log(filteredArray)
    if(filteredArray.length <= 0){
        alert('Email or Password incorrect')
    } else {
        alert (`Welcome, you are now logged in`)
        // window.location.href = "home.html"
        location.replace("index.html");
    }
})