const { gql } = require('apollo-server');


const typeDef = gql`

type messageType{
    message: String
    id: String
}

input messInput {
    message: String
}


type Mutation {
    createMessage(input: messInput) : messageType 
}

type Query {
    getMessage: String
    getName: String
    getAllMessags: [messageType]
      }

`;

// module.exports = typeDef;
module.exports = typeDef