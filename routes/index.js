var express = require('express');
var router = express.Router();

router.get('/',ensureAuthenticate,function(req,res) {
    res.render('index');
})

function ensureAuthenticate(req,res,next) {
    if(req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/users/login');
    }
}
module.exports = router;