require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCTRL = require('./AuthCtrl');
const socket = require('socket.io');



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
})

const io = socket(app.listen(SERVER_PORT, () => { console.log('Battle Cruiser Operational') }));

// app.use(express.static('./public'));

// sockets
io.on('connection', socket =>{
    console.log('socket connected')
    socket.on('emit message to general', data=>{
        console.log('test endpoint hit: emit');
        sockets.emit('generate general response', data)
    })
    socket.on('blast message to general', data => {
        console.log('general socket hit: blast')
        io.sockets.emit('generate general response', data);
    });
    
})


// socket.on('join', data=>{
//     socket.join(data.room);
//     console.log('join success', data.room);
//     io.to(data.room).emit('room joined', data)
// })

// login/auth
app.post('/auth/register', authCTRL.register);
app.post('/auth/login', authCTRL.login);

// save endpoints

app.post('/makeGame', authCTRL.makeGame);
app.post(`/scorekeeper/:{teamOneScore}/:{teamTwoScore}`,authCTRL.scoreKeeper )

// display endpoints

app.get('/getGame', authCTRL.getGame);
app.get('/getScore', authCTRL.getScore);
app.get('/getUser', authCTRL.getUser);
app.get('/getCode', authCTRL.getCode);

app.post('/storeCode', authCTRL.storeCode);

// logout

app.delete(`/auth/delete/:email/:password`, authCTRL.delete)

app.get('/auth/logout', (req,res)=>{
    req.session.destroy();
    res.redirect('http://localhost:3000/#/');
})

// test endpoints need to be deleted (eventually)

app.get('/test', async (req,res)=>{
    const db = app.get('db');
  const reply = await db.test()
  console.log(reply);
  res.sendStatus(200)
})





