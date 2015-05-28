var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Task = require('../models/Tasks')

/* GET /api/tasks     */
router.get('/', function(req, res, next) {
  console.log(req.body);
  Task.find(function(error, tasks){

    res.json(tasks);

  });
});
/* GET /api/tasks/:id */
router.get('/:id', function(req, res, next){
  console.log(req.body);
  Task.findById(req.params.id, function(error, task){
    res.json(task);
  });

});

router.post('/', function(req, res, next){
  console.log(req.body);
  Task.create(req.body, function(error, task){
    res.json(task);
  });

});

router.put('/:id', function(req, res, next){
  console.log(req.body);
  Task.findByIdAndUpdate(req.params.id, function(error, task){
      res.json(task)
  });

});

router.delete('/:id', function(req, res, next){
  console.log(req.body);
  Task.findByIdAndRemove(req.params.id, req.body, function(error, task){
      res.send("Task Deleted")
  });

});


module.exports = router;
