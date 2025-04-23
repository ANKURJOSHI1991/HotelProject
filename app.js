const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("express-fileupload");

/* this code for deployment ---- start -----*/
const path = require("path");
const root = path.join(__dirname, "dist");
app.use(express.static(root));

/* this code for deployment ---- end -----*/


app.use(cors());
app.use(upload());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require("./allRoutes/AllRoutes"));
app.use(express.static(__dirname + "/assets"));

/* this code for deployment ---- start -----*/
app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})
/* this code for deployment ---- end -----*/


const port = process.env.PORT ||  3000  ;
app.listen(port, () => {
    console.log("Server Running With Port",port);
})