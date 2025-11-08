require("dotenv").config();
const express = require("express");
const app = express();

const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use("/", require("./src/routers/mainrouter"));
app.use("/vehiculos74", require("./src/routers/vehiculos74.router"));

const PORT = process.env.PORT || 7003;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));