var express = require('express');
var router = express.Router();
const Ccontroler = require('../controler/categoery-crud'); 
const quescontroler = require('../controler/ques-crude'); 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// category crude router 
router.post('/insert',Ccontroler.insert);
router.get('/update',Ccontroler.update);
router.get('/delete',Ccontroler.delete);
router.get('/find',Ccontroler.find);

// ques crude rouder

router.post('/quesinsert',quescontroler.insert);
router.get('/quesupdate',quescontroler.update);
router.get('/quesdelete',quescontroler.delete);
router.get('/quesfind',quescontroler.find);
router.get('/quesidfind',quescontroler.findid);




module.exports = router;
