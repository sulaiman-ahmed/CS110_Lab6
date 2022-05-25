var user; //make a global variable to keep track of the user?

//function askUser - prompts user for a username when entering chatroom
async function askUser() {
    console.log(user);
    if (user == undefined) { //no user assigned yet
        user = prompt("Please enter your username!");
    } else { //User already assigned
        alert("Enjoy your stay, " + user );
    }
}