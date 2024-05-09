const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/stockchart', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'CanvasJS-Spline-Stockchart.html'));
});
app.get('/',
    (req, res) => {
        res.sendFile(__dirname + '/public/fetch.html');
    });

// app.get((req, res) => {
//     res.status(404);
//     res.send('<h1>File Not Found</h1>');
// });
app.listen(8081, () => {
    console.log("Server successfully running on port 8081");
  });