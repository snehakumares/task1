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