var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req,res,next){
  console.log(`First Name: `)
  console.log(`Last Name: `)
  res.send('POST received!')
})

router.use(bodyParser.urlencoded({extended: true}))

module.exports = router;
