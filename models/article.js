const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
    title: String,
    author: String,
    description: String
}, { timestamps: true, versionKey: false });

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;