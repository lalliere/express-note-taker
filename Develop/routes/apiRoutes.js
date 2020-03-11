const db = require("../db/db");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    return res.json(db);
  });

  app.post("/api/notes", function(req, res) {

    let nNote = req.body;

    console.log(nNote);
    
    db.push(nNote);

    res.json(nNote);
  });

  app.delete("/api/notes/:id", function(req, res) {

    newNote.length = 0;

    res.json({ ok: true });
  });
};
