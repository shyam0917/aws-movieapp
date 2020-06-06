const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
        "vote_count": Number,
        "id": Number,
        "video": Boolean,
        "vote_average": Number,
        "title": String,
        "popularity": Number,
        "poster_path": String,
        "original_language": String,
        "original_title": String,
        "genre_ids": [],
        "backdrop_path": String,
        "adult": Boolean,
        "overview": String,
        "release_date": String
})

module.exports = mongoose.model('Movie', MovieSchema);