const {promisify} = require('util');
const fs = require('fs-extra');
const mv = promisify(fs.move);

let message: string = "Hello World";
console.log(message);

// fs.move('c:/temp/File Move Test/Folder1/File1.txt', 'c:/temp/File Move Test/Folder2/File1.txt', function (err) {
//     if (err) return console.error(err);
//     console.log("success!");
// });


const moveFile = async (origin: string, destination: string) => {
    await mv(origin,destination, function (err) {
        if (err) return console.error(err);
        console.log("success!");
    });
}

moveFile('c:/temp/File Move Test/Folder1/File1.txt', 'c:/temp/File Move Test/Folder2/File1.txt');