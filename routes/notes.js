import express from 'express'
import notesController from '../controllers/notesContoller'


const notesRouter = express.Router()

notesRouter.route('/notes')
    .post(notesController.createNote)
    .get(notesController.getAllNotes);

module.exports = notesRouter;