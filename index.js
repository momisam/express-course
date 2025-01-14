//create express module

const express = require('express');
const app = express();

app.use('/contact', (req, res) => {
    console.log('first middleware');
    res.send('My contact is contact@mosessam.com');
})
app.use('/users', (req, res) => {
    console.log('second middleware');
    res.send('Users landing page');
})

app.use('/', (req, res) => {
    console.log('third middleware');
    res.send('My express course Homepage');
})


app.listen(3000, () => {
    console.log(`server is runnig on localhost:3000`);
});