const {client, q} = require('./faunadb')

client.query(q.Paginate(q.Match(q.Ref("indexes/all_posts")))).then(ret => {
    const postRefs = ret.data
    const getAllPostDataQuery = postRefs.map(ref => {
        return q.Get(ref)
    })
    client.query(getAllPostDataQuery).then(refs => {
        return  JSON.stringify(refs)
    }).then(res => {
        console.log(res)
    })
})