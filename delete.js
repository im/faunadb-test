const { client, q } = require('./faunadb')

const id = '243118581229814288'
client.query(q.Delete(q.Ref(q.Collection("posts"), id))).then(ret => {
    console.log('ret: ', ret);
}).catch(error => {
    console.log('error: ', error);
})