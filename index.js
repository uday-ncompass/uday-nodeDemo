const express = require("express")

const app = express()

const Port = 5000

app.get("/",(req,res) =>{
	res.json({
		message : "working"
	})
})

app.listen(Port , () => console.log("Node app working"))
