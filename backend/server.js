const express = require("express"); 
const app = express(); 

app.get("/api", (req, res) => {
  res.send("In backend server!");
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));