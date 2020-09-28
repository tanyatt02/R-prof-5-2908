const chatsPath = './server/db/chats'
const fs = require('fs')

const template = {
    _id: '',
    users: [],
    messages: []
}

let mod = {
    async create(req, res) {
        let newChat = Object.assign({}, template);
        newChat._id = req.params.id;

        fs.writeFile(`${chatsPath}/${req.params.id}.json`, JSON.stringify(newChat, null, ' '), err => {
            if(!err) {
                res.json({ status: true })
            }
        })
    },
    async load(req, res) {
        try {
            await fs.readFile(`${chatsPath}/${req.params.id}.json`, 'UTF-8', (err, data) => {
                if(!err) {
                    data = JSON.parse(data);
                    res.json(data);
                } else {
                    this.create(req, res)
                    
                }
            })
        }
        catch(err) {
            return false
        }
    }
}

module.exports = mod;