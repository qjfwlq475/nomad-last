
const loginForm = document.querySelector("#loginForm")
const loginInput = document.querySelector("#loginForm input");
const greeding = document.querySelector("#greeding");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   localStorage.setItem(USERNAME_KEY, loginInput.value);
   paintGreeding();
}

function paintGreeding(){  
   const username = localStorage.getItem(USERNAME_KEY);
   greeding.innerText = `Hello ${username}`;
   greeding.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit)
} else {
   paintGreeding();
}
