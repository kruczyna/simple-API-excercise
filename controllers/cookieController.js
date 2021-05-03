const Cookie = require('../models/models')

const cookie_get_all = (req, res) => {
  Cookie.find().sort({ createdAt: -1 })
  .then((result) => {
    res.render('allCookies', { cookie: result })
  })
  .catch((error) => {
    console.log(error)
  })
}

const cookie_create_post = (req, res) => {
  const cookie = new Cookie(req.body)
  cookie.save()
    .then((result) => {
      console.log(result)
      res.redirect('/all-cookies')
    })
    .catch((error) => {
      console.log(error)
    })
}

const cookie_get_one = (req, res) => {
  Cookie.findById(req.params.id)
  .then((result) => {
    res.render('details', { cookie: result })
  })
  .catch((error) => {
    console.log(error)
    res.status(404).render('404')
  })
}

const cookie_delete_one = (req, res) => {
  Cookie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ redirect: '/all-cookies'})
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = {
  cookie_get_all,
  cookie_create_post,
  cookie_get_one,
  cookie_delete_one
}
