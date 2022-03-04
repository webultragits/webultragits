const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PermissionSchema = new Schema({
    name: {
        type: String, required: true, unique: true
    }, guard_name: {
        type: String, required: true
    }
}, {timestamps: true});

const PermissionModel = mongoose.model('permission', PermissionSchema);
module.exports = PermissionModel;

