const express = require('express'),
app = express(),
authRoute = require("./routes/authRoute"),
quoteRoute = require("./routes/quoteRoute"),
auth = require('./middleware/auth.js')(),
mongoose = require("mongoose"),
passport = require("passport"),
localStrategy = require("passport-local"),
User = require("./models/user"),
cors = require('cors');

require('dotenv').config();

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(auth.initialize());
app.use(cors());

passport.use(new localStrategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authRoute);
app.use(quoteRoute);


app.get('/', (req,res) => {
  res.json({
    "message":"Hello!"
  })
})

const port = process.env.PORT || 5000

app.listen(port, () => {
   console.log(`Api has been connected Successfully at http://localhost:${port}`);
})