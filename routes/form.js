var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bicycle = require('../models/bicycle');
//var Comment = mongoose.model('comments');

router.get('/', function(req, res) {
    res.render('form',{title : 'Ingreso de Bicicletas'}
    );
});

router.get('/bicyclesList',function(req,res){
  Bicycle.find(function(err, bicycles) {
			if (err)
				res.json(err)
					res.json(bicycles); // devuelve todas las Bicicletas en JSON		
          //console.log(res.json(bicycles));
				}
			);
});

router.post('/addBicycle', function(req, res) {
  new Bicycle(req.body)
  .save(function(err, bicycle) {
    console.log('bicicleta: '+bicycle)
    if (err) 
    res.json(err);
    res.json(bicycle);
  });
});

/* POST form. */
router.post('/', function(req, res) {
  new Comment({title : req.body.comment})
  .save(function(err, comment) {
    console.log(comment)
    res.redirect('form');
  });
});

router.put('/editBicycle/:bicycle_id',function(req,res){
  Bicycle.update( {_id : req.params.bicycle_id},req.body, 
					function(err, bicycle) {
						if (err)
							res.send(err);
                res.send(bicycle);
			});
});

router.delete('/delete/:bicycle_id',function(req,res){
  Bicycle.remove( {_id : req.params.bicycle_id}, 
					function(err, bicycle) {
						if (err)
							res.send(err);
                res.send(bicycle);
			});
});

module.exports = router;