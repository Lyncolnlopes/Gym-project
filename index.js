const express = require('express')
const path = require('path')
const {engine} = require('express-handlebars')
const app = express()
app.use(express.json())
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public/css/')));
app.use(express.static(path.join(__dirname, 'public/img/')));
app.set('views', 'views');

app.use(
    express.urlencoded({
      extended: true,
    }),
)

app.get('/', function(req,res){
    res.render('home')
})

app.get('/views/planos.handlebars', function(req,res){
    res.render('planos')
})

app.get('/views/onde.handlebars', function(req,res){
    res.render('onde')
})

app.listen(3000)

