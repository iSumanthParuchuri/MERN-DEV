const mongoose = require('mongoose');

const checkSchema = new mongoose.Schema({
    name : {
        type: String,
        //type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
});
module.exports = mongoose.model('check',checkSchema);
