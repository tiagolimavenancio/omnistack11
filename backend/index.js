const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ evento: "OmniStack 11.0", aluno: "Tiago Lima" });
});

app.listen(3333);
