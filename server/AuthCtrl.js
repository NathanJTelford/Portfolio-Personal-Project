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
        req.session.user = { id: loginArray[0].coach_id, username: loginArray[0].username, email: loginArray[0].email, pic: loginArray[0].pic }
        res.status(200).send({ message: 'Logged In', userData: req.session.user, loggedIn: true })
    },

    delete: async (req, res) => {
        const { email, password } = req.params;
        const db = req.app.get('db');
        let deleteAcc = await db.find_coach({ email: email });
        console.log(deleteAcc)
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

    makeGame: async (req, res) => {
        const { gameName, teamName1, teamName2 } = req.body;
        const db = req.app.get('db');
        await db.make_game({ name: gameName, teamName1: teamName1, teamName2: teamName2 })
        req.session.game = { name: gameName, teamName1: teamName1, teamName2: teamName2 }
        res.status(200).send(req.session.game)

    },

    storeCode: (req, res) => {
        const { fieldCode } = req.body;
        console.log(req.body.fieldCode)
        req.session.code = { code: fieldCode };
        res.status(200).send(req.session.code)
    },

    getCode: (req, res) => {

        res.status(200).send(req.session.code)
    },


    getGame: (req, res) => {
        console.log(req.session)
        res.status(200).send(req.session.game)
    },

    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        }
        else { res.status(401).send({ message: 'Please Log In' }) }
    },

    scoreKeeper: (req, res) => {
        const { teamOneScore, teamTwoScore } = req.params;
        req.session.score = { teamOneScore: teamOneScore, teamTwoScore: teamTwoScore }
        console.log(req.params)
        res.status(200).send({ message: 'Score Saved', getScoreData: req.session.score })
    },

    getScore: (req, res) => {
        if(req.teamOneScore && req.teamTwoScore === NaN){
           let teamOneScore=0; 
           let teamTwoScore=0;
            return res.status(200).send( teamOneScore, teamTwoScore)
        }
        else
        res.status(200).send(req.session.score)
    },


}

// saveGame: async (req, res) => {
//     const {  updateGameName, updateTeamName1, updateTeamName2, updateConcatPoints, updateNumOfPeriods } = this.props;
//     const { email } = req.session.user;
//     const db = req.app.get('db');
//     let saveLock = await db.find_coach({ email: email });
//     if (!saveLock) {
//         return res.status(200).send({ message: 'Please Log In To Save A Game' })
//     } else { await db.saveGame(updateGameName, updateTeamName1, updateTeamName2, updateConcatPoints, updateNumOfPeriods)
//     }
//     res.status(200).send({message:'Save Successful'}).catch(error=>{console.log(error)})
// },