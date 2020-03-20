const router = require('express').Router();
const stringify = require('json-stringify-safe')
const filmstar = require('../models/film-star.model');
const findone = require('../controllers/findMovies.controller');

/**
 * Routes created:
 * 
 * 1. '/' -> "Home Checked";
 * 2. '/all' -> "All recoreded so far";
 * 3. '/create -> "create new filmstar";
 * 4. '/one/:fname' -> "Looks for one";
 * 
 */

//Home - WORKING
router.route('/').get((req,res) => {
    res.json('home Checked');
})
//Finding all records - WORKING
router.route('/all').get((req, res) => {
    filmstar.find((err, star) => {
        res.json(star);
    });
    
})
//Create new record - WORKING
router.route('/create').post((req,res) => {
    //const requestedData = req.body
    const newStar = new filmstar(req.body);
    //console.log(requestedData);
    newStar.save(() => {
        res.json('Data Stored');
    })
    
})
//Finding perticular record - WORKING
//List of moviews searched by Actor Name - Working
router.get('/one/:fname', findone);

module.exports = router;