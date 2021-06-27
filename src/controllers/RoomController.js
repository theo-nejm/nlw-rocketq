const Database = require('../db/config')

module.exports = {
    async create(req, res) {
        const db = await Database()
        const pass = req.body.password
        const roomName = req.body.roomName
        let roomId = ''

        /* GERAR O NÚMERO DA SALA */
        let isRoom = true;
        while(isRoom) {
            
            for(let i = 0; i < 6; i++) {
                roomId += Math.floor(Math.random() * 10).toString()
            }
            /* VERIFICAR SE A SALA JÁ EXISTE */
            const roomsExistentIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistentIds.some(roomExistentId => roomExistentId === roomId)
            
            if(!isRoom) {
                /* INSERIR A SALA NO BANCO */
                await db.run(`INSERT INTO rooms (
                    id,
                    pass,
                    name
                ) VALUES (
                    ${parseInt(roomId)},
                    '${pass}',
                    '${roomName}'
                )`)
            }
        }
        await db.close()
        
        res.redirect(`/room/${roomId}`)
    },

    async open(req, res) {
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and readed = 0`)
        const readedQuestions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and readed = 1`)
        let roomName = await db.all(`SELECT name FROM rooms WHERE id = ${roomId}`)
        roomName = roomName[0].name
        let isNoQuestions = false

        if(questions.length == 0 && readedQuestions.length == 0) {
            isNoQuestions = true
        }
        res.render('room', {roomId: roomId, roomName: roomName, questions: questions, readedQuestions: readedQuestions, isNoQuestions: isNoQuestions})
    },

    enter(req, res) {
        const roomId = req.body.roomId
        res.redirect(`/room/${roomId}`)
    }
}