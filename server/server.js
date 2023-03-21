const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
const bodyParser = require("body-parser");
const sendEmail = require("./utils/sendEmail")

// routers
const authRoutes = require('./routes/auth')

const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

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
app.post("/api/sendemail", async (req,res)=>{
   const{email} = req.body;

   try {
    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    const subject = "Thank You from Charandas"
    const message = `<h3>hello</h3>
    <p>This is the one im working on from sat,but i dont know this will work or not</P>`

    await sendEmail(subject, message, send_to, sent_from, reply_to)
    res.status(200).json({success: true, message: "Email Sent"})
   } catch (error) {
    res.status(500).json(error.message)
   }
}); 



