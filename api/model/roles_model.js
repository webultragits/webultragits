const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RolesSchema = new Schema({
    name: {
        type: String, required: true, unique: true
    }, guard_name: {
        type: String, required: true
    }
}, {timestamps: true});

const RolesModel = mongoose.model('roles', RolesSchema);
module.exports = RolesModel;

