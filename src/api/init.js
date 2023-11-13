const express = require("express");
const Router = express.Router;

const initRoutes = Router();

initRoutes.post("/", (req, res) => {
  res.status(200).json({ status: "active" });
});

module.exports = initRoutes;
