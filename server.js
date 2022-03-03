const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const ConnectDB = require("./config/db");
const errorHandler = require("./middleware/error");
ConnectDB();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const Allroutes = require("./routes/auth");

app.use("/api/auth", Allroutes);
//Error handler shld be last piece of middleware

app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
