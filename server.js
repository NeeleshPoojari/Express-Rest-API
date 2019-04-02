import express from 'express'
import bodyParser from 'body-parser'
var app = express()
import mongoose from 'mongoose'
import notesRouter from './routes/notes'
import getMongoConnection from './configuration/mongodbConf'

var port = process.env.PORT || 6000; // set our port
//var router = express.Router();

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

getMongoConnection()

// var dbUrl = 'mongodb://neel123:neel123@mycluster-shard-00-00-lwezh.mongodb.net:27017,mycluster-shard-00-01-lwezh.mongodb.net:27017,mycluster-shard-00-02-lwezh.mongodb.net:27017/test?ssl=true&replicaSet=myCluster-shard-0&authSource=admin&retryWrites=true'

// mongoose.connect(dbUrl, {
//         useNewUrlParser: true
//     },
//     (err) => {
//         console.log('mongo db connection error:', err)
//     })

    app.get('/', (req, res) => {
        res.send('Hello welcome to our api!');
      });


// router.route('/notes/:note_id')
//     .get((req, res) => {
//         console.log(req.params.note_id)
//         Note.findById(req.params.note_id, (err, note) => {
//             if (err)
//                 res.send(err);
//             res.json(note);
//         });
//     })
//     .put((req, res) => {

//         // use our note model to find the note we want
//         Note.findById(req.params.note_id, (err, note) => {

//             if (err)
//                 res.send(err);

//                 note.name = req.body.name; // update the notes info
//             note.save((err) => {
//                 if (err)
//                     res.send(err);

//                 res.json({
//                     message: 'Note updated!'
//                 });
//             });

//         });
//     })

//     .delete((req, res) => {
//         Note.deleteOne({
//             _id: req.params.note_id
//         }, (err, note) => {
//             if (err)
//                 res.send(err);

//             res.json({
//                 message: 'Successfully deleted'
//             });
//         });
//     });



app.use('/api', notesRouter)

app.listen(port);
console.log('Server on port ' + port);