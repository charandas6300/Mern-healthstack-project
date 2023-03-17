const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// routers
const authRoutes = require('./routes/auth')

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server started on ${process.env.PORT}`)
    })
})
.catch((err) => {
   console.log(err.message)
})

// routes
app.use("/api/auth",authRoutes)



