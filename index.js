const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// import 'APlayer/dist/APlayer.min.css';
const APlayer  = require('aplayer')

//const ap = new APlayer(options);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
