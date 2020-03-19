const noteList = require("../db/noteList.json");
const uuidv4 = require("uuid/v4");
const fs = require("fs");
const chalk = require("chalk");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    
    let obj = JSON.parse(fs.readFileSync("db/noteList.json", "utf8"));
    return res.json(obj);
    
    
  });

  app.post("/api/notes", function(req, res) {
    let nNote = req.body;
    let noteID = uuidv4();

    nNote.id = noteID;

    fs.readFile("db/noteList.json", function (err, data) {
      if (err) throw err;

      let notesArray = JSON.parse(data);
      
      notesArray.push(nNote);
    
      fs.writeFile("db/noteList.json", JSON.stringify(notesArray), "utf8", err => {
        if (err) throw err;
        console.log("Successfully wrote to 'noteList.json' file");
        res.status(200).end();
        
      })
    });
    
  });

  app.delete("/api/notes/:id", function(req, res) {
    console.log(req.body);

    fs.readFile("db/noteList.json", function (err, data) {
      if (err) throw err;
      
      let readData = JSON.parse(data);
      let filtered = readData.filter((note) => note.id !== req.params.id);

      fs.writeFile("db/noteList.json", JSON.stringify(filtered), "utf8", err => {
        if (err) throw err;
        res.status(200).end();

        console.log("Successfully deleted note.");
        
      })
    });


  });
};
