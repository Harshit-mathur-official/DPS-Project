const express = require('express');

const app = express();

app.get('',(request,response) => {
    response.send('Server is working fine.');
});

app.listen(5000, ()=> 
    console.log("Backend is running")
)