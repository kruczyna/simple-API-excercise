const Cookie = require('../models/models');

const cookie_get_all = async (req, res) => {
  const cookieValues = await Cookie.find().sort({ createdAt: -1 });
  res.render('allCookies', { cookie: cookieValues });
};

const cookie_create_post = async (req, res) => {
  const cookie = new Cookie(req.body);
  await cookie.save();
  res.redirect('/all-cookies');
};

const cookie_get_one = async (req, res) => {
  try {
    const foundCookie = await Cookie.findById(req.params.id);
    res.render('details', { cookie: foundCookie });
  } catch (error) {
    res.status(404).render('404');
  }
};

const cookie_delete_one = async (req, res) => {
  await Cookie.findByIdAndDelete(req.params.id);
  res.json({ redirect: '/all-cookies' });
};

module.exports = {
  cookie_get_all,
  cookie_create_post,
  cookie_get_one,
  cookie_delete_one,
};
