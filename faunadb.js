
const faunadb = require('faunadb')

process.env.FAUNADB_SECRET = 'fnADX25cRCACD3TH7OYeOAFDipx1rzVtweBCnO7H'
const client = new faunadb.Client({
      secret: process.env.FAUNADB_SECRET
})

module.exports = {
    client,
    q: faunadb.query
}
