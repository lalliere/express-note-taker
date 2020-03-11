const express = require("express");
const fs = require("fs");
// const apiRoutes = require("./Develop/routes/apiRoutes");
// const htmlRoutes = require("./Develop/routes/htmlRoutes");
const index = require("./Develop/public/assets/js/index");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// const readFileAsync = util.promisify(fs.readFile);
// const writeFileAsync = util.promisify(fs.writeFile);

// async function fileOfNotes() {
//   try {
//     let indexJs = await readFileAsync("index.js", "utf8");
//     let savedNotes = await readFileAsync("db.json", "utf8");

//     let notesFile = [savedNotes].map(JSON.parse);

//     await writeFileAsync(
//       "db.json",
//       JSON.stringify(notesFile, null, 2),
//       "utf8"
//     );

//     console.log("Successfully wrote to 'db.json' file");
//   } catch (err) {
//     console.log(err);
//   }
// }

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
