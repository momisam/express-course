//create express module

const express = require('express');
const app = express();

app.use('/user', (req, res) => {
    console.log('first middleware');
    res.send('My contact is contact@mosessam.com');
})



app.listen(3000, () => {
    console.log(`server is runnig on localhost:3000`);
});