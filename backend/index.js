const express = require("express")
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRoutes")
const chatRoutes = require("./Routes/chatRoutes")
const messageRoutes = require("./Routes/messageRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express()
const cors = require('cors')
app.use(
  cors({
    origin: "*",
  })
);

dotenv.config()
app.use(express.json());

const connectDb = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Server is connected to DataBase");
    }
    catch(err){
        console.log("Server is not connected to DataBase", err.message);
    }
}
connectDb()

app.get("/", (req,res) => {
    res.send("API is RUNNING");
});

app.use("/user", userRoutes)
app.use("/chat", chatRoutes)
app.use("/message", messageRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is Running"));