const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoleHasPermissionsSchema = new Schema({
    permission_id: {
        type: Number, required: true
    }, role_id: {
        type: Number, required: true
    }
}, {timestamps: true});

const RoleHasPermissionsModel = mongoose.model('role_has_permissions', RoleHasPermissionsSchema);
module.exports = RoleHasPermissionsModel;

