var loggedIn = sessionStorage.getItem('loggedIn');
if (loggedIn === "true") {
    // User is logged in
    var username = sessionStorage.getItem('username');
    // Display username and logout option
    document.getElementById('user-menu').innerHTML = '<a href="" onclick="userDetails()"><i class="fas fa-user"></i> ' + username +'</a>';
    document.getElementById('user-menu').style.display = 'block';
}
function userDetails(){
    alert("User Name : "+ username +"\nUser Role : "+userRole+"\nStatus : Logged in");
}