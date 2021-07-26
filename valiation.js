let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var password = document.getElementById("password").value;
if ( username == "sidharth.parmar" && password == "sidparmar8"||username == "kush.kundalia" && password == "rockeeee1"|| username=="dhyan.thakkar"&&password=="animeguy20000"||username == "Tirth.khunt" && password == "tirth@kaseednitro"){
alert ("You have logged in successfully");
window.location = "kased_studios.html"; // Redirecting to other page.
return false;
}
else{
attempt --;
alert("Username or Password is not registered");


    
 if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
alert ("Your login rights to KASE.ED STUDIOS have been suspended");

return false;
}
}
}
