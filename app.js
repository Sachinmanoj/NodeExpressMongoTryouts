const app = require('express')();
const engines = require('consolidate');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);

app.use(function(req, res){
  res.sendStatus(404); 
});

module.exports = app;
