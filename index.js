const express = require('express')
const axios = require("axios")
const path = require('path');
const app = express()
const port = 3000

app.use(express.static("public"))
app.get("/get-age",async(req,res)=>{
  const name=req.query.name;
  try{
    const response=await axios.get(`https://api.agify.io?name=${name}`);
    res.json(response.data);
  }
  catch (error) {
    res.status(500).json({ error: 'Something went wrong!' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
