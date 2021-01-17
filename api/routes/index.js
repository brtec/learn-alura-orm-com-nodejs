const bodyParser = require('body-parser')
const security = require('./securityRoute')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')


module.exports = app => {
  app.use(
    bodyParser.json(),
    pessoas,
    niveis,
    turmas,
    security
  )
}
