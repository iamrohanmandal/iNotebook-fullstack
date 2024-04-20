const connectToMongo = require("./db");
var cors = require('cors')
connectToMongo();
const express = require("express");
const app = express();
const port = 5000;


app.use(cors())
// Available outes
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
// app.get('/', (req, res) => {
//   res.send('Hello Rohan!')
// })

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
});
