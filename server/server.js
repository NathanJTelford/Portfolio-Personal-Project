require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCTRL = require('./AuthCtrl');


const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;


const app = express();
app.use(express.json());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => { console.log('Battle Cruiser Operational') })
})

app.post('/auth/register', authCTRL.register);
app.post('/auth/login', authCTRL.login);
app.post('/makeGame', authCTRL.makeGame);
app.post(`/scorekeeper/:?{teamOneScore}/?{teamTwoScore}`,authCTRL.scoreKeeper )
app.get('/getGame', authCTRL.getGame);
app.get('/test', async (req,res)=>{
    const db = app.get('db');
  const reply = await db.test()
  console.log(reply);
  res.sendStatus(200)
})
app.get('/auth/logout', (req,res)=>{
    req.session.destroy();
    res.redirect('http://localhost:3000/#/');
})





