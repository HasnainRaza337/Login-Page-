var fullName = document.getElementById("FullName").value;
// let thisEmail = "admin@user.com"
// let thisPassword = "123456"

function loginBtn() {
    event.preventDefault();
    var userEmail = document.getElementById("Email").value;
    var userPassword = document.getElementById("Password").value;

    if (userEmail === "admin@user.com" && userPassword === "123456") {
        window.location.assign("homepage.html");
        alert("Login Successfully.");
        // document.getElementById("userName").innerText = "Good day" +" "+ fullName +"!";

    } else {
        Toastify({
            text: "Your Email or Password is incorrect",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #98c1d9, #003566)",
            },
            // onClick: function(){} // Callback after click
        }).showToast();
        return;
    }
}







// window.onload = function(){ 
//     let userName = prompt("Enter you name")

//     document.getElementById("userName").innerText = "Good day" +" "+ userName +"!";
// }