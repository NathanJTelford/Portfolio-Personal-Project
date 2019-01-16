const BC = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        const { email, password, username, pic } = req.body;
        const db = req.app.get('db');
        let coachArray = await db.find_coach({ email: email });
        if (coachArray.length === 1) {
            return res.status(200).send({ message: 'email already in use' })
        } else {
            const salt = BC.genSaltSync(10);
            const hash = BC.hashSync(password, salt);
            let newCoachArr = await db.create_coach({ username: username, email: email, hash: hash, pic: pic })
            req.session.user = { id: newCoachArr[0].coach_id, email: newCoachArr[0].email, username: newCoachArr[0].username, pic: newCoachArr[0].pic }
        }
        res.status(201).send({ message: 'Account created', user: req.session.user })
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        let loginArray = await db.find_coach({email:email});
        if(loginArray[0]>=0){
           return res.status(200).send({message:'Email Not Found, Please Register'})
        }else{
            const result = BC.compareSync(password, loginArray[0].hash_code)
            if(!result){return res.status(200).send({message:'Incorrect Password'})}
        }
        req.session.user = {id : loginArray[0].coach_id, username:loginArray[0].username, email: loginArray[0].email, pic: loginArray[0].pic}
        res.status(200).send({message:'Logged In', userData: req.session.user, loggedIn: true })
    }, 

    makeGame: async (req,res) =>{
        const {  sportName, teamName, scoreName, pointValue, periods } = req.body;
       
    },

    saveGame: async (req,res) =>{

    },


    userData: (req,res) =>{
        if(req.session.user){
        res.status(200).send(req.session.user)}
        else{ res.status(401).send({message:'Please Log In'})}
    }


}

// db.make_game({ sportName:sportName, teamName:teamName, scoreName:scoreName, pointValue:pointValue, periods:periods})