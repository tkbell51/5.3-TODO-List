const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todos = [];
var complete = [];
app.get("/", function (req, res) {
  var idx=0,
  context = {
    todos : todos,
    complete : complete,
    id: function(){
      return idx++;
    }
  };

  res.render('index', context);
});

app.post("/", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/');
});

app.post('/todo/:id/complete/', function(req, res){
  var id = Number(req.params.id);
  var selection = todos[id];
  complete.push(selection);
  todos.splice(id, 1);
  res.redirect('/');
});
app.listen(3000);
