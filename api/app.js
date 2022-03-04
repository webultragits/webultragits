const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const UserModel = require('./model/model');
const PermissionModel = require('./model/permission_model');
const RolesModel = require('./model/roles_model');
const HasPermissionModel = require('./model/model_has_permissions_model');
const HasRolesModel = require('./model/model_has_roles_model');
const RoleHasPermissionModel = require('./model/role_has_permissions_model');

mongoose.connect('mongodb+srv://kingoftiruppur:king74991@cluster0.l29mm.mongodb.net/muslim_pro?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./auth/auth');

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-routes');

const app = express();

/*const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title:'Employee API',
            version:'1.0.0'
        }
    },
    apis:['api.js'],
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));*/

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

// Handle errors.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(3000, () => {
  console.log('Server started.')
});
