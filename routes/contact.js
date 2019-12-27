var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
router.get('/', function(req, res) {
    res.render('contact');
});
router.get('/review', function(req, res) {
    res.render('contactReview');
});
router.post('/post', function(req, res) {
    var transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'teddy55987@gmail.com',
            pass:'teddy74185296@55987'
        }
    });
    var mailOptions = {
        from:"六角學院",
        to:'teddy55987@gmail.com',
        subject:req.body.user+'寄了一封信',
        text:req.body.description
    }
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            return console.log(error)
        }
        res.redirect('review');
    })
    
    // console.log(req.body);
    // res.redirect('review');
    
});
module.exports = router;
