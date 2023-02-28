import express, { urlencoded as _urlencoded, json } from "express";
const app = express();
import router from "./db/routes/user.routes.js";
const PORT = process.env.PORT || 3000;
import cors from "cors";
import { urlencoded } from "express";
import acessandoBanco from "./db/mongoose.js";

app.use(cors());

acessandoBanco();

app.use(
  _urlencoded({
    extended: true,
  })
);

app.use(json());

app.use(router);

app.listen(PORT, () => {
  console.log("Server is Running");
});
