const Express = require('express');

const app = Express();
var https = require('https')
var http = require('http')

app.use(Express.json());
// app.use(Express.urlencoded({extended: false}));

// app.get('/', function (req, res) {
//     res.render('Index', function (html) {
//         res.send(html)
//       })
//   })

// app.use(express.static(__dirname + 'public'));
// Users/a-713/OneDrive/Desktop/TalentGarden/React/Homepage/

app.get('/', function (req, res) {
    res.send('GET request to homepage')
  })

//   app.use(express.static(path.join(__dirname, 'public')));

//   app.get('/', function(req, res){
//     res.render('Index.js');
//   });

// app.listen(8000,() => {});




http.createServer(app).listen(8000)