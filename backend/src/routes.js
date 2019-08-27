const express = require('express');
const DevController = require('./Controllers/DevController');
const LikeController = require('./Controllers/LikeControler');
const DesikeController = require('./Controllers/DeslikesController');


const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/deslikes', DesikeController.store);

module.exports = routes;