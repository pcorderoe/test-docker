const express = require('express')

const app = express()

app.use('/', (req, res) => {
	res.status(200).json({message:'ok tesaaaaaaa'})
})


const { PORT = 3000 } = process.env


app.listen(PORT,() => {
	console.log(`Server is running on ${PORT}`)
})
