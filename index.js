const database = require('./database')
const {
  ApolloServer,
  gql
} = require('apollo-server')

const queries = require('./typedefs-resolvers/_queries')
const mutations = require('./typedefs-resolvers/_mutations')
const enums = require('./typedefs-resolvers/_enums')
const equipments = require('./typedefs-resolvers/equipments')
const supplies = require('./typedefs-resolvers/supplies')
const givens = require('./typedefs-resolvers/givens')
const softwares = require('./typedefs-resolvers/softwares')
const tools = require('./typedefs-resolvers/tools')
const people = require('./typedefs-resolvers/people')

const typeDefs = [
  queries,
  mutations,
  enums,
  equipments.typeDefs,
  supplies.typeDefs,
  givens.typeDefs,
  softwares.typeDefs,
  tools.typeDefs,
  people.typeDefs,
]
const resolvers = [
  equipments.resolvers,
  supplies.resolvers,
  givens.resolvers,
  softwares.resolvers,
  tools.resolvers,
  people.resolvers,
]

const server = new ApolloServer({
  typeDefs,
  resolvers
})
server.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`)
})
