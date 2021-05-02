const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')

app.listen(process.env.SERVER_PORT)
app.set('view engine', 'ejs')
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('mainPage')
})

app.get('/create', (req, res) => {
  res.render('create')
})

app.use((req, res) => {
  res.status(404).render('404', { title: 404})
})
