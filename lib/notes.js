const fs = require('fs');
const path = require('path');

function createNewNote(note, notesArray) {
    notesArray.push(note);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    
    return note;

  }

  module.exports = { createNewNote }