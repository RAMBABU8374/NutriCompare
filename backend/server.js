const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(foodRoutes);

mongoose.connect(
"mongodb://ram:ram12345@ac-mcezez0-shard-00-00.qrqzznn.mongodb.net:27017,ac-mcezez0-shard-00-01.qrqzznn.mongodb.net:27017,ac-mcezez0-shard-00-02.qrqzznn.mongodb.net:27017/?ssl=true&replicaSet=atlas-im6pfk-shard-0&authSource=admin&appName=Cluster0"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req,res)=>{

  res.sendFile(
    path.join(__dirname, "../frontend/signup.html")
  );
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
