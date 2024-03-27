const express = require('express');
require('./app/config/mongodb')

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('', (request, response) => {
    response.send('Server is working fine.');
});


require('./app/routes/noticeCircular.route')(app);
require('./app/routes/enquiry.route')(app);
require('./app/routes/newsUpdate.route')(app);
require('./app/routes/alumni.route')(app);


app.use((request, response, next) => {
    var arr = {
        'status': false,
        'message': 'Something went wrong!!'
    };

    response.status(404).send(arr);
})

app.listen(5000, () =>
    console.log("Backend is running")
)