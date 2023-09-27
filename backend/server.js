const app = require("./app")
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

// setting up config file
dotenv.config({path:'backend/config/config.env'})

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT,() =>{
    console.log(`Server Started on Port : ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});

// Handle unhandled promise rejections

process.on('unhandleRejection', err =>{
    console.log(`ERROR: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise rejection`);
    server.close(()=>{
        process.exit(1)
    })
})