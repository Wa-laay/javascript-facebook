var database = [
    {
        username: "whales",
        password: "supersecret"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning  fr!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    }
];

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

function singIn(user, pass)  {
    if ( user === database[0].username &&
         pass === database[0].password) {
            console.log(newsFeed);
         } else 
           alert("Sorry,wrong username and password!")
        }

singIn(userNamePrompt, passwordPrompt);