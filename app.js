const express = require("express");
const app = express();
const mongoose = require("mongoose")
const methodOverride= require("method-override");
const bodyParser = require("body-parser");
const routes = require("./routes")
const cors = require("cors")


mongoose.connect('mongodb://localhost/api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => console.log(err))

app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(cors());
app.use(routes)

module.exports = app;

