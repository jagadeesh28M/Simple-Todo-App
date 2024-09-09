const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://jagadeesh28:pass@cluster0.f5bsn.mongodb.net/todos");

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : {
        type : Boolean,
        default : false
    }
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}