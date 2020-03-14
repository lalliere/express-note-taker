const fs = require("fs");

let fileupdates = {
    
    fileOfNotes(nNote) {
    
        let savedNotes = fs.readFile("..../db/db.json");

        let notesFile = [savedNotes].map(JSON.parse);

        fs.writeFile("db.json", JSON.stringify(notesFile, null, 2), "utf8");

        console.log("Successfully wrote to 'db.json' file");

    }

}

module.exports = fileupdates; 