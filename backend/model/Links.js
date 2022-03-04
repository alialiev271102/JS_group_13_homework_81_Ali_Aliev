const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    Url: {
        type: String,
        required: true
    },
    shortUrl: String
});

const Links = mongoose.model('Links', LinkSchema);

module.exports = Links;