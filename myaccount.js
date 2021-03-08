myAccount = () => {
    return document.querySelector('.main').innerHTML =
        `<form class='col-xs-12 col-sm-6 col-md-4' name="loginform" onSubmit="return validateForm();" action="index.html">
<h4>Sign in to Plantify</h4>
<input type="text" name="username" id="username" placeholder="Enter your username">
<input type="password" name="password" id="password" placeholder='Password'>
<button class="btn-outline-secondary submitBtn" type="submit">Sign in</button>
</form>`;

}


if (location.search != '') {
    console.log(location.search);
}


validateForm = () => {
    const un = document.loginform.username.value;
    const pw = document.loginform.password.value;
    const username = "username";
    const password = "password";
    window.localStorage.setItem('username', username);
    console.log(un, username, pw, password);
    if ((un == username) && (pw == password)) {

        return true;
    } else {
        alert("Login was unsuccessful, please check your username and password");
        return false;
    }

}

function hello() {
    var name = window.localStorage.getItem('username');

    if (name != "undefined" || name != "null") {
        document.getElementById('welcomeMessage').innerHTML = "Hello " + name + "!";
    } else
        document.getElementById('welcomeMessage').innerHTML = "Hello!";
}


window.addEventListener('load', hello)