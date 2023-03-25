const express = require('express');
const { default: mongoose } = require('mongoose');
const router = require('./journal.route');
require('dotenv').config()

const PORT = 3001;
const app = express();

mongoose.connect(process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to the database");
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/journal", router);

app.get("/", ()=>{res.send("health check complete")});

app.listen(PORT,()=> {
    console.log("Journal Record Server listening on PORT", PORT);
})