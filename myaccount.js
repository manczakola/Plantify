myAccount = () => {
    return document.querySelector('.main').innerHTML =
        `<form class='col-xs-12 col-sm-6 col-md-4' name="loginform" onSubmit="return validateForm();" action="index.html">
<h4>Sign in to Plantify</h4>
<input type="text" name="username" id="username" placeholder="Enter your username">
<input type="password" name="password" id="password" placeholder='Password'>
<button class="btn-outline-secondary submitBtn" type="submit">Sign in</button>
</form>`;

}

validateForm = () => {
    const un = document.loginform.username.value;
    const pw = document.loginform.password.value;

    // to use in future, with users databases!

    // const username = "username";
    // const password = "password";

    window.localStorage.setItem('username', un);
    // if ((un == username) && (pw == password)) {

    //     return true;
    // } else {
    //     alert("Login was unsuccessful, please check your username and password");
    //     return false;
    // }

}
const myAccountLink = document.querySelector('#navbarNav > ul >.myaccount');

function hello() {
    const name = window.localStorage.getItem('username');


    if (typeof name == "string") {
        myAccountLink.innerHTML = `  
        <a class="nav-link" aria-current="page" href="#myaccount" > 
        <img src="images/user.svg" onerror="this.onerror=null; this.src='images/user.png'">
        ${name} </a>
    `
    } else {
        myAccountLink.innerHTML = ` <a class="nav-link" aria-current="page" href="#myaccount" > 
        <img src="images/user.svg" onerror="this.onerror=null; this.src='images/user.png'">
        My account
      </a>`

    }


}


window.addEventListener('load', hello);

document.querySelector('.logout').addEventListener('click', () => {
    window.localStorage.removeItem('username');

    myAccountLink.innerHTML = ` <a class="nav-link" aria-current="page" href="#myaccount" > 
        <img src="images/user.svg" onerror="this.onerror=null; this.src='images/user.png'">
        My account
      </a>`;



})