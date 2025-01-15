//create express module
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');

app.use(adminRoutes);



app.listen(3000, () => {
    console.log(`server is runnig on localhost:3000`);
});