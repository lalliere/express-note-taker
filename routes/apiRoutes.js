const db = require("../db/db.json");
const uuidv4 = require("uuid/v4");
let fileupdates = require("../public/assets/js/fileupdates")


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {

    let nNote = req.body;
    let noteID = uuidv4();

    nNote.id = noteID;
    console.log(nNote);
    
    db.push(nNote);

    res.json(nNote);

    return fileupdates.fileOfNotes(nNote);
    //WHERE WE WILL PUT THE OBJECT THAT WILL READ AND WRITE TO THE DB.JSON
  });

  app.delete("/api/notes/:id", function(req, res) {
    console.log(req.body);
    
    // let filterdb = db.filter(function(item) {
    //   if (item.id = req.params.id) {
    //     return false;
    //   }
    //   else {
    //     return true;
    //   }
    // });
    
    // console.log(filterdb);

    // res.json(filterdb);

  });
};