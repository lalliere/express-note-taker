const noteList = require("../db/noteList.json");
const uuidv4 = require("uuid/v4");
const fs = require("fs");
const chalk = require("chalk");


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteList);
    
  });

  app.post("/api/notes", function(req, res) {
    let nNote = req.body;
    let noteID = uuidv4();

    nNote.id = noteID;

    //console.log(nNote);

    fs.readFile("db/noteList.json", function (err, data) {
      if (err) throw err;

      let notesArray = JSON.parse(data);
      
      notesArray.push(nNote);
    
      fs.writeFile("db/noteList.json", JSON.stringify(notesArray), "utf8", err => {
        if (err) throw err;
        
        console.log("Successfully wrote to 'noteList.json' file");
        
      })
    });
    
    //res.json(nNote);
  });

  app.delete("/api/notes/:id", function(req, res) {
    console.log(req.body);

    fs.readFile("db/noteList.json", function (err, data) {
      if (err) throw err;
      console.log(chalk.blue(JSON.parse(data)));
      let readData = JSON.parse(data);
      let filtered = readData.filter((note) => note.id !== req.params.id);

      fs.writeFile("db/noteList.json", JSON.stringify(filtered), "utf8", err => {
        if (err) throw err;

        //console.log("Successfully deleted note.");
        //console.log(noteList);
      })
    });
    
    //console.log(noteList);


  });
};

// const noteList = "../public/js/noteList";
// const uuidv4 = require("uuid/v4");
// //const fs = require("fs");



// module.exports = function(app) {

//   app.get("/api/notes", function(req, res) {
    
//     res.json(noteList);
//   });

//   app.post("/api/notes", function(req, res) {

//     // nNote = req.body;

//     // console.log(nNote);

//     // req.params.id = uuidv4();

//     // res.json(nNote);


//     // let {title, text, noteID} = req.body;

//     // console.log(title, text, noteID);
    
//     // if (noteID === undefined) {
//     //   let newID = uuidv4();

//     //   noteID = newID;

//     //   noteList.push({title, text, newID});

//     //   console.log(noteID)
//     // } else {
//     //   noteList.push({title, text, noteID});
      
//     // }
    
//     let nNote = req.body;
//     let noteID = uuidv4();
    
//     nNote.id = noteID;
    
//     console.log(nNote);
//     // read(nNote);
   
//     // function read(data) {
      
      // fs.readFile("noteList.json", function (err, data) {
      //   if (err) throw err;
        
      //   notesFile = JSON.parse(data);
        
      //   noteList.push(notesFile);
      
      //   fs.writeFile("noteList.json", JSON.stringify(notesFile), "utf8", err => {
      //       if (err) throw err;

      //       console.log("Successfully wrote to 'db.json' file")
      //   })
      // });
    //}
//   });

//   app.delete("/api/notes/:id", function(req, res) {
//     const deleteID = parseInt(req.params.id);

//     noteList.splics(deleteID, 1);

//     return res.end();
    
//     // let filterdb = db.filter(function(item) {
//     //   if (item.id = req.params.id) {
//     //     return false;
//     //   }
//     //   else {
//     //     return true;
//     //   }
//     // });
    
//     // console.log(filterdb);

//     // res.json(filterdb);

//   });
// };