const loginForm = document.querySelector("#loginForm");
const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const HelloUser = document.querySelector("#HelloUser");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "userName";
const USERPASS_KEY = "password";


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, id.value);
    localStorage.setItem(USERPASS_KEY, pw.value)
}

function paintGreeding(){
    const username = localStorage.getItem(USERNAME_KEY);
    HelloUser.innerText = `Hello ${username}`;
    HelloUser.classList.remove(HIDDEN_CLASS);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
const saveUserpass = localStorage.getItem(USERPASS_KEY);

if (saveUsername, saveUserpass === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeding();
}