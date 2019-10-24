const express=require('express');
const User=require('../model/database');
const Note=require('../model/database2');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.render('index');
});
router.get('/signup',(req,res,next)=>{
    res.render('signup');
});
router.post('/signup',async(req,res,next)=>{
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.user = req.body.user;
    user.path = '/img/uploads/'+ req.file.filename;
    user.originalname = req.file.originalname;
    await user.save();
    console.log(user);
    res.redirect('/mypost');
});
router.get('/mypost',async( req,res,next)=>{
    const users = await User.find();
    res.render('mypost',{
        users
    });
});
router.get('/post/:id',async(req,res,next)=>{
    const users = await User.findById(req.params.id);
    res.render('post',{
        users
    });
});
router.get('/notes',(req,res,next)=>{
    res.render('notes');
});
router.post('/note',async(req,res,next)=>{
    const note = new Note(req.body);
    await note.save();
    console.log(note);
    res.redirect('/notes');
});

module.exports=router;