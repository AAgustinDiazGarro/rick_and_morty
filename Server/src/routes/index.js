
const {login} = require('../controllers/login.js');
const {getCharById} = require('../controllers/getCharById');
const {postFava, deletFav} = require('../controllers/handelFavorites');
const router = require('express').Router();


router.get('/character/:id', (req,res)=>{
    getCharById(req,res);
});

/* router.get('/login', login); */

 router.get('/login', (req,res)=>{
    login(req,res);
});

router.post('/fav', (req,res)=>{
    postFava(req,res);
});

router.delete('/fav/:id', (req,res)=>{
    deletFav(req,res);
});

module.exports = router;