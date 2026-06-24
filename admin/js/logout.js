function logout(){

localStorage.removeItem(
"adminLoggedIn"
);

window.location.href =
"login.html";
}
