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

    },
    getNote: (req, res) => {
        console.log(req.params.note_id)
        Note.findById(req.params.note_id, (err, note) => {
            if (err)
                res.send(err);
            res.json(note);
        });

    },
    updateNote: (req, res) => {
        Note.findById(req.params.note_id, (err, note) => {

            if (err)
                res.send(err);

            note.noteTitle = req.body.noteTitle;
            note.noteDescription = req.body.noteDescription;

        
            note.save((err) => {
                if (err)
                    res.send(err);

                res.json({
                    message: 'Note updated!'
                });
            });
        });
    },
    deleteNote: (req, res) => {
        Note.deleteOne({
            _id: req.params.note_id
        }, (err, note) => {
            if (err)
                res.send(err);

            res.json({
                message: 'Successfully deleted'
            });
        });
    }

}

module.exports = notesController;