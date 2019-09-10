const faunadb = require('faunadb')
const chalk = require('chalk')
const q = faunadb.query

process.env.FAUNADB_SECRET = 'fnADX25cRCACD3TH7OYeOAFDipx1rzVtweBCnO7H'

if (!process.env.FAUNADB_SECRET) {
    console.log(chalk.yellow('Required FAUNADB_SERVER_SECRET enviroment variable not found.'))
    process.exit(1)
}

function initFaunaDB(name) {
    const client = new faunadb.Client({
        secret: process.env.FAUNADB_SECRET
    })
    client.query(q.CreateCollection({ name: name }))
    console.log(chalk.cyan('Your collections have been initilized successfully'))
    return client
}

initFaunaDB('posts')


