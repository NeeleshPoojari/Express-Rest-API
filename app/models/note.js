import mongoose from 'mongoose'

var Schema       = mongoose.Schema;

var NoteSchema   = new Schema({
    noteId: String,
    noteTitle: String,
    noteDescription: String,
    createdAt: Date

});

module.exports = mongoose.model('Note', NoteSchema);
