const express = require('express');
const router = express.Router();
// const moviesDal = require('../services/pg.movies.dal')

// this is the /users route
router.get('/', async (req, res) => {
    const theMovies = [
        {movie_id: 1, movie_name: 'example'},
        {movie_id: 2, movie_name: 'example1'},
        {movie_id: 3, movie_name: 'example2'}

       
    ];
    try {
    //    let theMovies = await moviesDal.getMovies(); 
        if(DEBUG) console.table(theMovies);
        res.render('movies', {theMovies});
    } catch {
        res.render('503');
    }
});



module.exports = router