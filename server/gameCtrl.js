

module.exports={
    makeGame: async (req, res) => {
        const { gameName, teamName1, teamName2 } = req.body;
        const db = req.app.get('db');
        await db.make_game({ name: gameName, teamName1: teamName1, teamName2: teamName2 })
        req.session.game = { name: gameName, teamName1: teamName1, teamName2: teamName2 }
        res.status(200).send(req.session.game)

    },

    storeCode: (req, res) => {
        const { fieldCode } = req.body;
        req.session.code = { code: fieldCode };
        res.status(200).send(req.session.code)
    },

    getCode: (req, res) => {
        if(!req.session.code){return res.status(404).send({message:'Incorrect Code'})}
        else{res.status(200).send(req.session.code)}
    },


    getGame: (req, res) => {
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