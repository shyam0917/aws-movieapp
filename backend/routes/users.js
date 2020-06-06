var express = require('express');
var router = express.Router();
var MovieSchema = require('../model/movie.model');

/* GET users listing. */
router.get('/movies', function(req, res, next) {
  MovieSchema.find({}).then(data=>{
   res.send({success:true,result: data});
  },error=>{
    res.send({success:false,result:error});
  })
});

/*POST add movie*/
router.post('/movies', function(req, res, next) {
  console.log("tt",req.body);
  const movie = req.body;
  console.log("tt",req.body.movie);
MovieSchema.create(movie).then(data=>{
  res.send('Added Successfully');
},error=>{
  res.send(err);
})
 
});

/*DELETE delete movie*/
router.delete('/movies', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
