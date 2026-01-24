const USERS = "users"; // all registered users stored in local storage
const USER_KEY = "userInfo"; // email / password stored in session storage

//checks if user exists and gets user data
export function getUser() {
  return JSON.parse(localStorage.getItem(USERS)) || [];
}

// otherwise stores user data
export function storeUser(user) {
  const users = getUser();
  const allUsers = [...users, user];

  localStorage.setItem(USERS, JSON.stringify(allUsers));
}

export function checkRegisteredUser(email) {
  const users = getUser();
  return users.find((user) => user.email === email);
}

// fucntion is called in the loginform coponent to store user data in session storage. user is an argument object coming from the handle submit func
export function Login(user) {
  sessionStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function Logout() {
  sessionStorage.removeItem(USER_KEY);
}
