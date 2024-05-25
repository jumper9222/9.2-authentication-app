const formTitle = document.getElementById("form-title");
const confirmPasswordContainer = document.getElementById("confirm-password-container");
const submitButton = document.getElementById("submit");
const toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password")

function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = [];

function login(username, password) {
  const user = users.find(user => user.username === username && user.password === password);

  if (usernameInput.value === "" || passwordInput.value === "") {
    alert("Please enter a username and password.")
  } else if (user) {
    alert("Successful login!");
  } else {
    alert("User not found. please sign up first.");
  }
}


function signup(username, password, confirmPassword) {
  const passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  if (!passRegex.test(password)) { 
    alert("Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.")
  } else if (password !== confirmPassword) {
    alert("Passwords do not match!")
  } else {
    users.push( {username: username, password: password} );
    alert("Sign up successful! You can now log in.");
    toggleAuth();
  }
};

function handleSubmit() {
  const isLoginForm = formTitle.textContent === "Login";
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  
  if (isLoginForm) {
    login(username, password)
  } else {
    signup(username, password, confirmPassword)
  }
}