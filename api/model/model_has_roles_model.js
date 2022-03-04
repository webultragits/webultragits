const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelHasRolesSchema = new Schema({
    permission_id: {
        type: Number, required: true
    }, role_id: {
        type: Number, required: true
    }
}, {timestamps: true});

const ModelHasRolesModel = mongoose.model('model_has_roles', ModelHasRolesSchema);
module.exports = ModelHasRolesModel;

