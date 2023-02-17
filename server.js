const express = require('express')
const { engine } = require('express-handlebars');

const app = express()
const port = 3000;

app.engine(
  'hbs',
  engine({
    layoutsDir: __dirname + '/src/layouts',
    partialsDir: __dirname + '/src/partials',
    defaultLayout: 'base/base',
    extname: 'hbs',
  })
);

app.set('view engine', 'hbs');

// app.use(express.static(__dirname + '/dist'));

// app.get('/login', function (request, response) {
//   response.render(__dirname + '/src/pages/signin/signin.hbs', {
//     title: 'Login',
//   });
// });

// app.get('/registration', function (request, response) {
//   response.render(__dirname + '/src/pages/registration/registration.hbs', {
//     title: 'Registration',
//   });
// });

app.get('/', function (request, response) {
  response.render(__dirname + '/dist')
})

app.listen(port, () => console.log(`App listening to port ${port}`));
