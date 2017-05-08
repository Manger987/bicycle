var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Comment = new Schema({
    title : String,
});

mongoose.model('comments', Comment);

mongoose.connect('mongodb://127.0.0.1:27017/test');