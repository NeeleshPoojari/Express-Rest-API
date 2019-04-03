import express from 'express'
import notesController from '../controllers/notesContoller'


const notesRouter = express.Router()

notesRouter.route('/notes')
    .post(notesController.createNote)
    .get(notesController.getAllNotes);

notesRouter.route('/notes/:note_id')
    .get(notesController.getNote)
    .put(notesController.updateNote)
    .delete(notesController.deleteNote)

module.exports = notesRouter;