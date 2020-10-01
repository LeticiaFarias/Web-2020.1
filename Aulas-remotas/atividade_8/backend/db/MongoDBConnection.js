const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

const mongoDB_URI =
  "mongodb+srv://leticia:web2020@cluster0.g06l0.mongodb.net/atividade8?retryWrites=true&w=majority";
mongoose.connect(mongoDB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose Connected to " + mongoDB_URI);
});
db.on("disconnected", () => {
  console.log("Mongoose Disconnected to " + mongoDB_URI);
});
db.on("error", (err) => {
  console.log("Mongoose Error: " + err);
});
