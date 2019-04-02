import mongoose from 'mongoose';

var dbUrl = 'mongodb://neel123:neel123@mycluster-shard-00-00-lwezh.mongodb.net:27017,mycluster-shard-00-01-lwezh.mongodb.net:27017,mycluster-shard-00-02-lwezh.mongodb.net:27017/test?ssl=true&replicaSet=myCluster-shard-0&authSource=admin&retryWrites=true'

const getMongoConnection = () => {
    console.log("Mongo called")
    mongoose.connect(dbUrl, {
            useNewUrlParser: true
        },
        (err) => {
            console.log('mongo db connection error:', err)
        })
}

module.exports = getMongoConnection