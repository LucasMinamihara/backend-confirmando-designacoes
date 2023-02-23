const express = require("express");
const app = express();
const router = require("./db/routes/user.routes");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const { urlencoded } = require("express");
const { acessandoBanco } = require("./db/mongoose");

app.use(cors());

acessandoBanco();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log("Server is Running");
});
