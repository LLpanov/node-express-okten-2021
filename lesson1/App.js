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
// const fs = require('fs');
// const path = require('path');

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

// let one = [{name: "Andrii", age: 22, city: "Lviv"}];
// let two = [{name: "Zara", age: 25, city: "Praga"}]
//

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
// const changeFiles = () => {
//     fs.readFile(path.join(__dirname, 'Hm', 'main', 'inPerson', 'text1.txt'), 'utf8', (err, data) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//         fs.appendFile(path.join(__dirname, 'Hm', 'main', 'online', 'text2.txt'), `${data}`, {flag: 'w'}, (err => {
//             if (err) {
//                 console.log(err);
//                 throw err
//             }
//
//         }));
//
//     })
//     fs.readFile(path.join(__dirname, 'Hm', 'main', 'online', 'text2.txt'), 'utf8', (err, data) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//         fs.appendFile(path.join(__dirname, 'Hm', 'main', 'inPerson', 'text1.txt'), `${data}`, {flag: 'w'}, (err => {
//             if (err) {
//                 console.log(err);
//                 throw err
//             }
//
//         }));
//
//
//     })};
// changeFiles()


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


 function create() {
    fs.mkdir(path.join(__dirname, 'Cw', 'task3', 'files'), {recursive: true}, (err => {
        if (err) {
            console.log(err);
            throw err
        }
        fs.mkdir(path.join(__dirname, 'Cw', 'nothing'), (err1) => {
            if (err1) {
                console.log(err1);
                throw err1
            }

        })

        fs.writeFile(path.join(__dirname, 'Cw', 'task3', 'files', 'text.txt'), 'Dont worry,be happy', (err2 => {
            if (err2) {
                console.log(err2);
                throw err2
            }
        }))


    }));

};
create()

const chekOut = () => {
    fs.readFile(path.join(__dirname,'Cw','task3','files','text.txt'),'utf8',(err,data)=>{
        if (err) {
            console.log(err)
            throw err
        }
    })

}
