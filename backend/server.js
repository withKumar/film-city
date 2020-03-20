const App = require('./app');
const http = require('http');


http.createServer(App).listen(5000, () => {
    console.log('App Running on port 5000');
});

