const filmstar = require('../models/film-star.model');
const _ = require('lodash');

function findone(req, res) {
    
    /**
     * Logic : 
     * using model.find() method to find the perticular data
     * crating an empty data storage to store the incoming data
     * then -> mapping using .map() & storing the data part of movies only
     * then -> now maping using .map() of movies and showing them separately     * 
     */
    
    const mypara = req.params       //receiving Parameters
    console.log(mypara);

    filmstar.find(mypara, (err, data) => {
        let result = {};
        let movies = [];
        //console.log(result["movies"]);
        //console.log(data[0]);
        result = data[0];
        movies = result.movies;
        _.forEach(movies, (ele, key) => {
            console.log(ele);
        })
        console.log(movies);
        // _.forEach(result, (ele, key) => {
        //     res.send(`value taken from ${ele}`);
        // })

        // data.map((ele) => {
        //     var movies = ele;
        //     // res.json(movies);
        //     // movies.map(e => {
        //     //     console.log(e);
        //     // })
        //     var type = movies instanceof Object;
        //     //console.log(movies);
        //     console.log(movies["movies"]);
        //     const a = [];
        //     // movies.[movies].map(ele => {
        //     //     a.push(ele);
        //     //     //console.log(a);
        //     // })
        //     // a.forEach(ele => {
        //     //     console.log(ele);
        //     // })
        //     console.log(a);
        //     console.log(type);
        // })
        // res.end('Thanks for consoling');
        // //res.json(data1);
    })
    res.send('Thanks');
};

module.exports = findone;