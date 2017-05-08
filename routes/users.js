var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res) {
    res.render('users',{title : 'Ingreso de Usuarios'}
    );
});

/*router.get('/:nombre', function(req, res, next) {
  res.render('/form',{nombre: req.params.nombre}); //le pasa a la vista form el parametro nombre se muestra en vista con #{nombre}
  //res.send('respond with a resource');
});*/


module.exports = router;
