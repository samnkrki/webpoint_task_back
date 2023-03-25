const express = require('express');
const router = require('./journal.route');

const PORT = 3001;
const app = express();

app.use("/journal", router);
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", ()=>{res.send("health check complete")});

app.listen(PORT,()=> {
    console.log("Journal Record Server listening on PORT", PORT);
})