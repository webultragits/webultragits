const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelHasPermissionsSchema = new Schema({
    permission_id: {
        type: Number, required: true
    }, role_id: {
        type: Number, required: true
    }
}, {timestamps: true});

const ModelHasPermissionsModel = mongoose.model('model_has_permissions', ModelHasPermissionsSchema);
module.exports = ModelHasPermissionsModel;

