const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const URI =
  "mongodb+srv://kripikbalado:asdjkl@clustercovid.qjnnwfm.mongodb.net/todoList?retryWrites=true&w=majority";
const router = require("./routes/router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

mongoose.set("strictQuery", false);
mongoose.connect(URI, { useNewUrlParser: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
