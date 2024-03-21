        //mắt login password
        const passwordField = document.getElementById("password");
        const togglePassword = document.getElementById("show-pwd-btn");
        
        togglePassword.addEventListener("click", function () {
            console.log(passwordField.type);
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            passwordField.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
        });
        //chuyển hướng login 
function Redirect(){
    window.location.href = 'Main.html';
 }