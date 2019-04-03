import express from 'express'
import bodyParser from 'body-parser'
import notesRouter from './routes/notes'
import getMongoConnection from './configuration/mongodbConf'

var app = express()
var port = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

getMongoConnection()

app.get('/', (req, res) => {
    res.send('Hello welcome to our api!');
});

app.use('/api', notesRouter)

app.listen(port);
console.log('Server on port ' + port);