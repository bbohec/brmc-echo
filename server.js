const express = require('express')
const app = express()
let port = 80;
app.use(express.static('public'));

let hype = 1000000000000;


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/main.html')
})
app.get('/chart', function (req, res) {
  res.sendFile(__dirname + '/public/chart.html')
})

app.get('/like', function(req, res) {
	hype++;
    res.json({ message: 'thanks dude!' });   
});
app.get('/hate', function(req, res) {
	hype--;
    res.json({ message: 'Awwww noooooooo! XD' });   
});
app.get('/hype', function(req, res) {
    res.json({ hype: hype });   
});

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!')
})