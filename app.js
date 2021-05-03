const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const Cookie = require('./models/models')

app.listen(process.env.SERVER_PORT)
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

app.get('/all-cookies', (req, res) =>{
  Cookie.find().sort({ createdAt: -1 })
    .then((result) => {
      res.render('allCookies', { cookie: result })
    })
    .catch((error) => {
      console.log(error)
    })
})

app.get('/', (req, res) => {
  res.render('mainPage')
})

app.get('/create-cookie', (req, res) => {
  res.render('create')
})

app.post('/create-cookie', (req, res) => {
  const cookie = new Cookie(req.body)
  cookie.save()
    .then((result) => {
      console.log(result)
      res.redirect('/all-cookies')
    })
    .catch((error) => {
      console.log(error)
    })
})

app.use((req, res) => {
  res.status(404).render('404', { title: 404})
})
