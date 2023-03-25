const express = require('express');
const { default: mongoose } = require('mongoose');
const router = require('./routes/index.route');
require('dotenv').config()
const cors = require("cors");
const swaggerDocs = require('./swagger');

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

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(router);

app.get("/", (req, res)=>{res.send("health check complete")});

app.listen(PORT,()=> {
    console.log("Journal Record Server listening on PORT", PORT);
    swaggerDocs(app);
})