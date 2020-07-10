const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req,res,next) => {
    res.end('Will send all the promo details to you!');
})
.post((req, res, next) => {
  res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /promotion');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});

promoRouter.route('/:promoId/')
.get((req, res, next) => {
  res.end('Will send the detail of /promotions/' + req.params.promoId);
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST not supported on /promotion/'+ req.params.promoId);
})
.put((req, res, next) => {
  res.end('Update the promotion /promotions/'+req.params.promoId);
})
.delete((req, res, next) => {
  res.end('Deleting promotions/'+req.params.promoId);
});


module.exports = promoRouter;