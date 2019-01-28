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
        res.status(201).send({ message: 'Account created', user: req.session.user, registered: true })
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        let loginArray = await db.find_coach({ email: email });
        if (loginArray[0] >= 0) {
            return res.status(200).send({ message: 'Email Not Found, Please Register' })
        } else {
            const result = BC.compareSync(password, loginArray[0].hash_code)
            if (!result) { return res.status(200).send({ message: 'Incorrect Password' }) }
        }
        req.session.user = { id: loginArray[0].coach_id, username: loginArray[0].username, password: loginArray[0].hash_code, email: loginArray[0].email, pic: loginArray[0].pic }
        res.status(200).send({ message: 'Logged In', userData: req.session.user, loggedIn: true })
    },

    delete: async (req, res) => {
        const { email, password } = req.params;
        const db = req.app.get('db');
        let deleteAcc = await db.find_coach({ email: email });
        if (deleteAcc[0] === 0) {
            return res.status(401).send({ message: 'No Account Found' })
        } else {
            const result = BC.compareSync(password, deleteAcc[0].hash_code);
            if (result) {
                db.delete_acc({ password: deleteAcc[0].hash_code })
                res.status(202).send({ message: 'Account Deleted' })
            }
        }

    },

    edit: async (req,res)=>{
        const { id, email, username, pic, pass} = req.body;
        const db = req.app.get('db');
            const salt = BC.genSaltSync(10);
            const hash = BC.hashSync(pass, salt);
           const editedCoach = await  db.edit_coach({email:email, username: username, pic:pic, pass:hash, id:id})
           req.session.updatedUser = { id: editedCoach[0].coach_id, username: editedCoach[0].username, password: editedCoach[0].hash_code, email: editedCoach[0].email, pic: editedCoach[0].pic }
            req.session.user = req.session.updatedUser;

        res.status(201).send({message:'Update Successful', userData: req.session.user, edited: true})
        
    },

    authCode: (req, res) => {
        const { fieldCode } = req.params;
        if (fieldCode === req.session.code) {
            return true
        }
        return res.status(200).send({message:'Field code accepted'})
    }



}