let database = [
    {
        username: "whales",
        password: "supersecret"
    }
];

let newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning  fr!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    }
];
console.log(newsFeed[0])
let userNamePrompt = prompt("What's your username?")
let passwordPrompt = prompt("What's your password?")

function singIn(user, pass)  {
    if ( user === database[0].username &&
         pass === database[0].password) {
            console.log(newsFeed);
         } else 
           alert("Sorry,wrong username and password!")
        }

singIn(userNamePrompt, passwordPrompt);