function createaccount() {
    var modal = document.getElementById("create-account-modal");
    var sigin = document.getElementById("signin-modal");
    modal.style.display = "flex";
    sigin.style.display = "none";
}

function signin() {
    var modal = document.getElementById("signin-modal");
    var createaccount = document.getElementById("create-account-modal");
    modal.style.display = "flex";
    createaccount.style.display = "none";
}

function close() {
    var parent = this.parent;
    parent.style.display = "none";
}

function usersignin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email.value != "")
        if (password.value != "") {
            var modal = document.getElementById("signin-modal");
            modal.style.display = "none";
            var user = document.getElementById("user");
            user.style.display = "block";
            document.getElementById("name").innerHTML = email;
            var option = document.getElementById("create-account");
            option.style.display = "none";
        }
}

function mobcreateaccount() {
    var modal = document.getElementById("create-account-phone");
    modal.style.display = "table";
    var signin = document.getElementById("signin-phone");
    signin.style.display = "none";
}

function signinphone() {
    var createaccount = document.getElementById("create-account-phone");
    createaccount.style.display = "none";
    var modal = document.getElementById("signin-phone");
    modal.style.display = "table";
}