require('dotenv').config()
console.log(process.env.apiKey)
var config = process.env
firebase.initializeApp(config);
