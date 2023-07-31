
var database = [
	{
		username: "tommy",
		password: "nopass"
	}
];

var neewsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning"
	},
	{
		username: "Sally",
		timeline: "Javascript is so cool"
	},
	{
		username: "Thomas",
		timeline: "HomeDepot is scary"
	}	
];

var userNamePrompt = prompt("What is you username?");
var userPassPrompt = prompt("What is your password?");

function signIn(user, pass) {
	if (user === database[0].username &&
		pass === database[0].password) {
		console.log(neewsfeed)
	} else {
		console.log("Wrong username and/or password...")
	}
}

signIn(userNamePrompt, userPassPrompt);