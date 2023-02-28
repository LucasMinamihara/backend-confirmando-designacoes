import { connect } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

function acessandoBanco() {
  connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Banco de dados conectado!");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default acessandoBanco;
