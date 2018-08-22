const fs = require('fs');

// Fake data
// var data = [{id:1, value:'Hello'}, {id:2, value:'Hello2'}, {id:3 , value:'Hello3'}, {id:4, value:'Hello4' }, {id:5, value:'Hello5'}];

// Iterating through an array of objects and storing them in a folder
for(var i = 0; i < data.length; i++) {
  let filePath = `./files/newFile${data[i].id}.txt`;
  let fileContent = data[i].value;
  fs.writeFile(filePath, fileContent,'utf8', (err) => {
    if (err) {
        console.log('Error', err);
    }
    console.log('New File Created');
   });
}

// GET Read single files
// Use fs read file method
// Make sure to specify what type of encoding

// Read a single file
fs.readFile('./newFile1.txt', 'utf8', function(err ,data) {
    // If an error occurred, handle it (throw, propagate, etc)
  if (err) {
    console.log('Unknown Error', err);
    return;
  }
  console.log(data);
})

// Read a directory
fs.readdir('./files', 'utf8', function(err, files) {
  if (err) {
    console.log('error', err);
  }
  for(var i = 0; i < files.length; i++) {
    var filePath = `./files/${files[i]}`
    console.log(filePath);
    fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) {
        console.log('Could not read files');
        return;
      }
      console.log('File text', data);
    })
  }
});

// POST Create files
fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
        console.log('Error', err);
    }
    console.log('New File Created');
});

// PUT: Update files 
// I: FilePath, text to add, callback
// Put: Update files by rewriting them with the uniqueID given
fs.writeFile('info.txt',lyrics , (err) => {
    if (err) {
       throw err;
    }
    console.log('Lyrics Saved.')
})

// DELETE: Delete files 
// I: FilePath with unique Id
// Use unlink method on fs module
fs.unlink('info.txt', (err) => {
    if (err) {
       throw err;
    }
    console.log('Deleted file')
});



