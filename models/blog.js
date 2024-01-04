const fs = require('fs');
const path = require('path');

module.exports = class Blogs{
    constructor(title,image,text){
        (this.title = title), (this.image = image), (this.text = text);
    };


    save() {
        const filePath = path.join(
          path.dirname(process.mainModule.filename),
          "data",
          "blogs.json"
        );
        fs.readFile(filePath, (err, fileContent) => {
          if (err) {
            console.error(err);
            return;
          }
          let blogs = [];
          if (fileContent) {
            blogs = JSON.parse(fileContent);
          }
          this.id = Math.random().toString();
          blogs.push(this);
          fs.writeFile(filePath, JSON.stringify(blogs), (writeErr) => {
            if (writeErr) {
              console.error(writeErr);
            }
          });
        });
      };

      static fetchAll(cb){
        const filePath = path.join(
            path.dirname(process.mainModule.filename),
            "data",
            "blogs.json"
          );
          fs.readFile(filePath, (err, fileContent) => {
            if (err) {
              cb([]);
            }
            cb(JSON.parse(fileContent));
          });
      };

      static findById(id, cb){
        const filePath = path.join(
          path.dirname(process.mainModule.filename),
          "data",
          "blogs.json"
        );
        fs.readFile(filePath, (err, fileContent) => {
          if (err) {
            cb({});
          }
          let blogs = JSON.parse(fileContent);
          cb(blogs.find(item=>item.id === id));
        });
      }
}