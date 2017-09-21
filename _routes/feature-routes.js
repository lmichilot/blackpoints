var express = require('express'),
  _ = require('lodash'),
  jwt = require('jsonwebtoken'),
  dotenv = require('dotenv'),
  Usuario = require('../_classes/Usuario'),
  FeatureModel = require('../_models/FeatureModel'),
  mu = new FeatureModel();

/*CONFIGURATIONS*/
var app = module.exports = express.Router();
dotenv.load();

app.get('/api/features', function (req, res) {
  debugger;
  mu.getAll((error, results) => {
    if (error) {
      return res.status(201).send(
        {
          data: {
            "result": false,
            "data": error.sqlMessage + '\n-> ' + error.sql
          }
        }
      );
    }
    else {
      return res.status(201).send(
        {
          data: {
            "result": true,
            "data": results
          }
        }
      );
    }
  });

});


