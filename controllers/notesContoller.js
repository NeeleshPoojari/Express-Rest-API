import Note from '../app/models/note'
const notesController = {
    getAllNotes: (req, res) => {
        Note.find((err, notes) => {
            if (err)
                res.send(err);
            res.json(notes);
        });
    },
    createNote: (req, res) => {
        var note = new Note();
        note.note_id = req.body.note_id;
        note.noteTitle = req.body.noteTitle;
        note.noteDescription = req.body.noteDescription;
        note.createdAt = req.body.createdAt;
        note.save((err) => {
            if (err)
                res.send(err);

            res.json({
                message: 'Note created!'
            });
        });

    }
}

module.exports = notesController;