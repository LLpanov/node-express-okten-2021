//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Classwork<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// 1 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і
// одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// // як можна це обійти, але поки зробіть так


// const fs = require('fs');
// const path = require('path');

// fs.mkdir(path.join(__dirname, 'Cw'), (err => {
//     if (err) {
//         console.log(err);
//         throw err
//     }
// }));

// fs.writeFile(path.join(__dirname, 'Cw', 'text.txt'), 'some info', (err => {
//     if (err) {
//         console.log(err);
//         throw err
//     }
//     fs.readFile(path.join(__dirname, 'Cw', 'text.txt'), 'utf8', (err1, data) => {
//         if (err1) {
//             console.log(err1);
//             throw err1
//         }
//         fs.writeFile(path.join(__dirname, 'Cw', 'text2.txt'), `${data}`, (err2 => {
//             if (err2) {
//                 console.log(err2);
//                 throw err2;
//             }
//         }))
//     });
// }));

// 2.2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього
// і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// fs.writeFile(path.join(__dirname, 'Cw', 'file.txt'), 'some info', (err => {
//     if (err) {
//         console.log(err);
//         throw err
//     }
//     fs.readFile(path.join(__dirname, 'Cw', 'file.txt'), 'utf8', (err1, data) => {
//         if (err1) {
//             console.log(err1);
//             throw (err1);
//         }
//         fs.mkdir(path.join(__dirname, 'Cw', 'newFile'), (err2 => {
//             if (err2) {
//                 console.log(err2);
//                 throw err2
//             }
//             fs.writeFile(path.join(__dirname, 'Cw', 'newFile', 'new.txt'), data, (err3 => {
//                 if (err3) {
//                     console.log(err3);
//                     throw err3;
//                 }
//                 fs.unlink(path.join(__dirname, 'Cw', 'file.txt'), (err4 => {
//                     if (err4) {
//                         console.log(err4);
//                         throw err4
//                     }
//                 }));
//             }));
//         }));
//     })
//
// }));

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити,
// але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new


const fs = require('fs');
const path = require('path');
//
//
//  function create() {
//     fs.mkdir(path.join(__dirname, 'Cw', 'task3','folder'), {recursive: true}, (err => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//
//         fs.writeFile(path.join(__dirname, 'Cw', 'task3', 'text.txt'), 'Dont worry,be happy', (err2 => {
//             if (err2) {
//                 console.log(err2);
//                 throw err2;
//             }
//         }))
//
//
//     }));
//
// };
// create();


 // не получилось аsync await та промісами прописати ((

//
// const checkDirectory = (directory) => {
//     fs.readdir(path.join(__dirname, 'Cw', directory), 'utf8', (err, files) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//         console.log(files);
//
//
//         files.map(file => {
//             fs.stat(path.join(__dirname,'Cw', directory,file), (err1, stats) => {
//                 if (err1) {
//                     console.log(err1);
//                     throw err1;
//                 }
//
//
//                 if (stats.isFile()) {
//                     fs.truncate(path.join(__dirname, 'Cw', directory, file), (err2) => {
//                         if (err2) {
//                             console.log(err2);
//                             throw (err2)
//                         }
//                     })
//                 } else if (stats.isDirectory()) {
//                     fs.rename(path.join(__dirname, 'Cw', directory, file), path.join(__dirname, 'Cw', directory, `_new${file}`), (err3) => {
//                         if (err3) {
//                             console.log(err3);
//                             throw err3;
//                         }
//                     })
//                 }
//             });
//
//         })
//
//     });
//
//
// }
// checkDirectory('task3');