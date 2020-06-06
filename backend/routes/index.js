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
  const movie = req.body;
MovieSchema.create(movie).then(data=>{
  res.send('Added Successfully');
},error=>{
  res.send(err);
})
 
});

/*POST update movie*/
router.post('/updatemovie', function(req, res, next) {
  const movie = req.body;
console.log("ttr",movie);
MovieSchema.updateOne({"id":movie.id},{$set:{title: movie.title,overview: movie.overview, vote_average: movie.Rating}},(err,data)=>{
  if(err){
    res.status(400).send({success:false, err:err});
  }
  res.send({success:true,data: data});

})

 
});

/*DELETE delete movie*/
router.delete('/movies/:movieId', function(req, res, next) {
  const id = req.params.movieId;
  MovieSchema.deleteOne({id:id},function(err,data){
    if(err){
      res.send(err);
    }
  MovieSchema.find({}).then(dat=>{
    res.send(dat);
  })
  })

});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
