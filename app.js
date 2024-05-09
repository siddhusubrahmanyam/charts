const express = require('express');
const path = require('path');
const app = express();

app.use('/chart', express.static(path.join(__dirname, 'public')));
app.use((req,res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource Not Found</h1>');
})

// app.get('/', async(req, res) => {
//     res.sendFile(path.join(__dirname, 'public'));
// });

app.listen(8081, () => {
    console.log("Server successfully running on port 8081");
  });