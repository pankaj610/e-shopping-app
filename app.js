const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/errors');
// const expressHbs = require('express-handlebars');

const app = express();
// app.engine('hbs',expressHbs());
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

app.use(errorController.get404);
 
app.listen(3000);