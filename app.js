const express = require("express");
require("./src/db/conn")
const cors = require ("cors")
const router = require('./src/routers/datarouter');
const dataVideo= require("./src/models/data");
const { get } = require("mongoose");
const app =express();
const port=process.env.port || 3000;
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log(`connection is live at port no. ${port}`);
    
})