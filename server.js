const app = require('express')()
const session = require('express-session')
const CASAuthentication = require('cas-authentication')

app.listen(1234);

app.use(session( {
  secret: '12087371912',
  resave: false,
  saveUninitialized : true,
}))


const cas = new CASAuthentication({
  cas_url: 'https://login.insa-lyon.fr/cas',
  service_url: 'localhost:3000',
  returnTo: '/'
})

app.use('/', cas.bounce, function (req, res) { res.send("Hello World");  console.log("coucou"); })