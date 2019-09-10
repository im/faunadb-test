const { client, q } = require('./faunadb')

const id = '243118599511736849'

client.query(q.Update(q.Ref(q.Collection("posts"), id),{ data: { tags: ["pet", "cute"] } })).then((ret) => {
    console.log(ret)
})