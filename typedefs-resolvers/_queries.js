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
        peoplePaginated(
          page: Int, per_page: Int
        ): [People]
        peopleFiltered(
          team: Int,
          sex: Sex,
          blood_type: BloodType,
          from: String
        ): [People]
    }
`

module.exports = typeDefs
