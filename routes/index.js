var express = require('express');
var router = express.Router();
var { check, validationResult } = require('express-validator');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', success: req.session.success, error :req.session.error })
});

let  arr = [];
var email = check('id').notEmpty()
arr.push(email);

router.post('/person', arr,function(req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()){
     req.session.success = false
     req.session.error = errors.array()
     console.log(req.session.error );
     
     res.redirect('/')
     //return res.status(422).json({ error: errors.array() });
     
  }else{

    req.session.success = true
    req.session.error = null
    res.redirect('/person/' + req.body.id)
  }
  
  

  
})

router.get('/person/:id', function(req, res, next) {
  
  res.render('person', { title: 'person', id: req.params.id });
  console.log(req.params.id);
  
});


module.exports = router;
