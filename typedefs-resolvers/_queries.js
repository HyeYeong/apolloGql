const {
  gql
} = require('apollo-server')

const typeDefs = gql `
    type Query {
        equipments: [Equipment]
        equipmentAdvs: [equipmentAdv]
        supplies: [Supply]
    }
`

module.exports = typeDefs
