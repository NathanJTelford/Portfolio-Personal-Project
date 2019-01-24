require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCTRL = require('./AuthCtrl');
const gameCtrl = require('./gameCtrl');
const socket = require('socket.io');
// const ioCtrl = require('./ioCtrl');



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
io.on('connection', socket => {
    console.log('socket connected')
    socket.on('emit message to general', data => {
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
app.post(`/auth/code/:fieldCode`, authCTRL.authCode);
// app.put(`/auth/edit/:email/:password`, authCTRL.edit)

// save endpoints

app.post('/makeGame', gameCtrl.makeGame);
app.post(`/scorekeeper/:teamOneScore/:teamTwoScore`, gameCtrl.scoreKeeper)

// display endpoints

app.get('/getGame', gameCtrl.getGame);
app.get('/getScore', gameCtrl.getScore);
app.get('/getUser', gameCtrl.getUser);
app.get('/getCode', gameCtrl.getCode);

app.post('/storeCode', gameCtrl.storeCode);

// logout/delete/edit

app.delete(`/auth/delete/:email/:password`, authCTRL.delete)
app.put(`/auth/edit/:email/:username/:pic/:pass/:id`, authCTRL.edit)
app.get('/auth/logout', (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000/#/');
})





