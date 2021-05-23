const mongoose = require("mongoose");
require('dotenv').config()

const Schema = mongoose.Schema;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => console.log("were on!"))
  .catch(err => console.log(err));

const cookieSchema = new Schema({
  cookieName: { type: String, required: true },
  cookieSummary: String,
  cookieRecepie: [ String ]
}, {timestamps: true});

const Cookie = mongoose.model("Cookie", cookieSchema);

module.exports = Cookie;
