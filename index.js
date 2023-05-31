const express = require('express')
const path = require('path')
const {engine} = require('express-handlebars')
const app = express()
app.use(express.json())
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'))
app.use(express.static(path.join(__dirname + '../../' * '/public')));
app.set("views", path.join(__dirname,"views"))
app.set("public", path.join(__dirname,"public"))


app.set('views', 'views');

app.use(
    express.urlencoded({
      extended: true,
    }),
);


app.get('/', function(req,res){
    res.render('home')
});

app.get('/views/planos.handlebars', function(req,res){
    res.render('planos')
});

app.get('/views/onde.handlebars', function(req,res){
    res.render('onde')
});

app.listen(5000,()=> {
  console.log("Serve is running on port 5000!")
});

