const {
  gql
} = require('apollo-server')

const typeDefs = gql `
    type Query {
        equipments: [Equipment]
        equipmentAdvs: [equipmentAdv]
        supplies: [Supply]
        givens: [Given]
        softwares: [Software]
        software: Software
        people: [People]
    }
`

module.exports = typeDefs
