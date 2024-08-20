// Dynamic Footer
var date = new Date();
var currentYear = date.getFullYear();
const footerText = document.getElementById('footer');
footerText.innerHTML = `© ${currentYear} Arseel Ali`;

// Login Listener
document.getElementById("auth").addEventListener("submit", function(event){
    event.preventDefault(); 
    var userStoredPass = document.getElementById("password").value;
    if (userStoredPass === "mlilt.arseel") {
        window.location.href = "/";
    } else {
        alert("Incorrect Password. Try again.");
        document.getElementById("password").value = "";
    }
});
