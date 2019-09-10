
const { client, q } = require('./faunadb')

const data = {
    title: "120",
    author: "2",
    tag: ["3"],
    content: "4"
}

const post = {
    data
}


client.query(q.Create(q.Collection('posts'), post))
    .then(ret => {
        console.log('ret: ', ret);

    }).catch(error => {
        console.log('error: ', error);
    })
