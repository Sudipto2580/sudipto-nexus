function login(){

const username =
document.getElementById(
"username"
).value;

const password =
document.getElementById(
"password"
).value;

if(
    username === "Sudipto" &&
    password === "Sudipto2580@"
){

    localStorage.setItem(
    "adminLoggedIn",
    "true"
    );

    window.location.href =
    "dashboard.html";

}

else{

    alert(
    "Invalid Credentials"
    );

}


}
