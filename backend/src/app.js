const express = require('express');
const app = express();


const users = require('./db.json');


app.use(express.json())










app.get("/", (req,res) => {
   res.send(users)
})

app.post("/admin", (req,res) => {
	const new_user = ([...users,req.body])
	res.send(new_user)

 })









 const connect = require('./config/db');

app.listen(1234, async () => {
	await connect()
	console.log("server is running")
})

