const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const Cookie = require('./models/models')
const cookieRoutes = require('./routes/cookieRoutes.js')
const cookieCreate = require('./routes/cookieCreate.js')
const cookieController = require('./controllers/cookieController')

app.listen(process.env.SERVER_PORT)

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

app.use('/cookie', cookieRoutes)
app.use('/create-cookie', cookieCreate)
app.get('/', (req, res, result) => {
  res.redirect('/all-cookies')
})

app.get('/all-cookies', cookieController.cookie_get_all)

app.use((req, res) => {
  res.status(404).render('404')
})
