function goHome() {
    window.location.href = "index.html";
}

function searchUser() {
    let input = document.getElementById("search").value;

    if (input.trim() === "") {
        console.log("Search is empty");
    } else {
        console.log("Searching for: " + input);
    }
}

function logout() {
    let confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        alert("Logged out successfully");

        window.location.href = "index.html";
    } else {
        alert("Logout cancelled");
    }
}

window.onload = function () {
    console.log("Website Loaded Successfully");
};