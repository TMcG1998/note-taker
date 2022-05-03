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

  function deleteNote(id, notesArray) {
    // Remove the note from the array
    notesArray.splice(id, 1);    
    
    for(let i = 0; i < notesArray.length; i++) {
        notesArray[i].id = i;
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    return notesArray;

  }

  module.exports = { createNewNote, deleteNote }