const mongoose = require("mongoose");
// require("dotenv").config();

// const connectionString = process.env.DB_CONNECTION_STRING;

const connectionString =
  "mongodb+srv://admin:p@ssw0rd@cluster0.ydj4w.mongodb.net/test";

let isConnected;

const connectToDatabase = () => {
  if (isConnected) {
    console.log("=> using existing database connection");
    return Promise.resolve();
  }
  console.log("=> using new database connection");
  return mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      isConnected = db.connections[0].readyState;
      console.log(e);
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = { connectToDatabase };
