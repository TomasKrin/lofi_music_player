const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/songs", async (req, res) => {
  try {
    const response = await fetch("https://lofi-terminal-default-rtdb.firebaseio.com/songs.json");

    const responseData = await response.json();
    res.send(responseData);
  } catch (error) {
    res.status(500).send({ error });
  }
});
app.listen(port, () => {
  console.log(`Server is running on the ${port} port`);
});
