const express = require('express');
const colors = require('colors');
const env =  require('dotenv').config();
const {errorHandler} = require ('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const port = process.env.PORT  || 6000

connectDB()

const app =  express()

app.use(express.json())
app.use(express.urlencoded({extends: false}));

app.use('/api/goals' , require('./routes/goalRoutes'))
app.use('/api/users' , require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(port, ()=> console.log(`server is running on port ${port}`))



