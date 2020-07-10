import mongoose from 'mongoose'

const gradesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    lastModified: {
        type: Date,
        required: true
    },
})

const gradesModel = mongoose.model('grades', gradesSchema)
export { gradesModel }