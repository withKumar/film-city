const Express = require('express');
const logger = require('morgan');
const app = Express();
const mongoose = require('mongoose');
const favicon = require('favicon');
const _ = require('lodash');

//router
const route = require('./routes/indexRoute');

// Database connection
const DBUrl = "mongodb+srv://lib123:lib123@book-duqur.mongodb.net/test?retryWrites=true&w=majority";

// Database options
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName : 'film_city',
}

//Database connection establishment using CONNECT
mongoose.connect(DBUrl,dbOptions)
    .then(db => console.log('DB Connected ' + db))
    .catch(err => console.log(err));

app.use(logger('dev'));
app.use(Express.json());
//app.use(favicon);


app.use('/api', route);
app.use((req, res, next) => {
    var url = req.url;
    if(url !== '/'){
        res.json('Working In Basics Only');
    }
    next();
});

app.use((req, res) => {
    res.end();
})



module.exports = app;