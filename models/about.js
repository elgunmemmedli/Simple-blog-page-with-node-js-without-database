const fs = require("fs");
const path = require("path");

module.exports = class About {
  constructor(title, image, text) {
    (this.title = title), (this.image = image), (this.text = text);
  }

  save() {
    const filePath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "about.json"
    );
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        console.error(err);
        return;
      }
      let aboutData = {};
      if (fileContent) {
        aboutData = JSON.parse(fileContent);
      }
      aboutData = { ...aboutData, ...this };
      fs.writeFile(filePath, JSON.stringify(aboutData), (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
        }
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "about.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb({});
      }
      cb(JSON.parse(fileContent));
    });
  }
};
