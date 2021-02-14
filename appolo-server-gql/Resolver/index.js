let crypto = require('crypto')
let localData = {}

const resolver = {
    Query: {
        getMessage: () => {
            return "hello world "
        },

        getName: () => {
            return "Osama"
        },
        getAllMessags: () => {
            return [{ message: "test message", id: "12345"}]
        }
    },

    Mutation: {
        createMessage: (_,{input}) => {
            // console.log(args);
            let id = crypto.randomBytes(10).toString('hex')
            console.log(id);
            localData[id] = {id,...input.message}
            return {id,...input}
        }

        
       
    }
}

module.exports = resolver