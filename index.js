const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
// app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// parse request data content type application/json
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: "50mb"}));

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import property routes
const propertyRoutes = require('./src/routes/property.route');

// create property routes
app.use('/api/v1/property', propertyRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});