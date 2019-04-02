import mongoose from 'mongoose';
import variables from '../variables/variables'

var dbUrl = variables.dbUrl;


const getMongoConnection = () => {
    console.log(dbUrl);
    console.log("Mongo called")
    mongoose.connect(dbUrl, {
            useNewUrlParser: true
        },
        (err) => {
            console.log('mongo db connection error:', err)
        })
}

module.exports = getMongoConnection