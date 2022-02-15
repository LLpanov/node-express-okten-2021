// fs.writeFileSync(path.join(__dirname, 'files', 'file.txt'), 'some data');
// fs.writeFile(path.join(__dirname, 'files', 'file2.txt'), 'Some Data2', (err => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// }));
// fs.readFile(path.join(__dirname,'files','file2.txt'),'utf8',((err, data) => {
//     if(err){
//         console.log(err);
//     throw err
//     }
//     console.log(data)
// }))
// fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\n New Year', (err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
//
// }))
// for (let i = 0; i < 100; i++){
//
//     fs.appendFile(path.join(__dirname, 'files', 'file2.txt'), '\n New Year',{flag:'w'}, (err => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//
//
//     }))
//
// }

// fs.readFile(path.join(__dirname,'files','file2.txt'),'utf8',((err, data) => {
//     if(err){
//         console.log(err);
//     throw err
//     }
//     console.log(data)
// }))
// const fs = require('fs')
// const path = require("path");

// fs.truncate(path.join(__dirname,'files','file2.txt'),(err => {
//     if(err){
//         console.log(err)
//         throw err
//     }
// }))

// fs.unlink(path.join(__dirname,'files','file2.txt'),(err => {
//     if(err){
//         console.log(err)
//         throw err
//     }
// }))

// fs.mkdir(path.join(__dirname,'files','newYear','test','test2'),{recursive:true},(err => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// }))

// fs.readdir(path.join(__dirname, 'test'), (err, data) => {
//     console.log(data)
//
//
// });

// fs.rename(path.join(__dirname, 'test'), path.join(__dirname, 'ForMany'), (err) => {
//     if (err) {
//         console.log(err)
//     }
//     })
