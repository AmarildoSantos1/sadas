const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
name: {type: String, required: true}
})

module.exports = mongoose.model('Checklist', checklistSchema);