const db = require("../db/db");
const fs = require("fs");

module.exports = function(app) {
    const readFileAsync = util.promisify(fs.readFile);
    const writeFileAsync = util.promisify(fs.writeFile);

    async function fileOfNotes() {
    try {
        // let indexJs = await readFileAsync("/public/assets/js/index.js", "utf8");
        let savedNotes = await readFileAsync("/db/db.json", "utf8");

        let notesFile = [savedNotes].map(JSON.parse);

        await writeFileAsync(
        "db.json",
        JSON.stringify(notesFile, null, 2),
        "utf8"
        );

        console.log("Successfully wrote to 'db.json' file");
    } catch (err) {
        console.log(err);
    }
    }

}