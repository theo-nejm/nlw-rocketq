const Database = require('../db/config')

module.exports = {
    async index(req, res) {
        const roomId = req.params.room
        const questionId = req.params.question
        const action = req.params.action
        const password = req.body.password
        const db = await Database()

        console.log(roomId)
        // Verificar se a senha está correta
        const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
        console.log(verifyRoom)
        if(verifyRoom.pass == password) {
            if(action == 'delete') {

                await db.run(`DELETE FROM questions WHERE id = ${questionId}`)

            } else if (action == 'check') {
                await db.run(`UPDATE questions SET readed = 1 WHERE id = ${questionId}`)
            } 
        } else {
            console.log("Senha incorreta!")
            res.render('passincorrect', {roomId: roomId})
        }

        res.redirect(`/room/${roomId}`)
    },

    async create(req, res) {
        const db = await Database()
        const question = req.body.question
        const roomId = req.params.room
    
        db.run(`INSERT INTO questions (
            title,
            room,
            readed
        ) VALUES (
            "${question}",
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`)
    }
}