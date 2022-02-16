//// Homeworke1
// //
// //     Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// // Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// // Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// // ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// // і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// // але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
// //
// // Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// // (ті, що були в папці inPerson будуть в папці online)
//
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'Hm', 'main', 'inPerson'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//     }
//     fs.mkdir(path.join(__dirname, 'Hm', 'main' ,'online'),(err1 => {
//         if (err1){
//             console.log(err1);
//             throw err1
//         }
//     }))
// });

let one = [{name: "Andrii", age: 22, city: "Lviv"}];
let two = [{name: "Zara", age: 25, city: "Praga"}]


// for (const i of one) {
//     for (const e in i)
//     fs.appendFile(path.join(__dirname, 'Hm', 'main', 'inPerson', 'text1.txt'), `\n${e}:${i[e]}`, (err => {
//         if (err) {
//             console.log(err)
//             throw err
//         }
//     }));
// }
//
// for (const i of two) {
//     for (const e in i)
//         fs.appendFile(path.join(__dirname, 'Hm', 'main', 'online', 'text2.txt'), `\n${e}:${i[e]}`, (err => {
//             if (err) {
//                 console.log(err)
//                 throw err
//             }
//         }));
// }
//
const changeFiles = () => {
    fs.readFile(path.join(__dirname, 'Hm', 'main', 'inPerson', 'text1.txt'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err
        }
        fs.appendFile(path.join(__dirname, 'Hm', 'main', 'online', 'text2.txt'), `${data}`, {flag: 'w'}, (err => {
            if (err) {
                console.log(err);
                throw err
            }

        }));

    })
    fs.readFile(path.join(__dirname, 'Hm', 'main', 'online', 'text2.txt'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            throw err
        }
        fs.appendFile(path.join(__dirname, 'Hm', 'main', 'inPerson', 'text1.txt'), `${data}`, {flag: 'w'}, (err => {
            if (err) {
                console.log(err);
                throw err
            }

        }));


    })};
changeFiles()