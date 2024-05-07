'use strict';

const fs = require('fs');

// Функция для чтения файла и записи его в обратном порядке
function reverseFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Ошибка при чтении файла:', err);
            return;
        }

        const reversedData = data.split('').reverse().join('');

        fs.writeFile(filePath, reversedData, (err) => {
            if (err) {
                console.error('Ошибка при записи файла:', err);
                return;
            }
            console.log('Файл успешно перезаписан в обратном порядке.');

            // Для удержания консоли от закрытия
            process.stdin.resume();
            console.log('Нажмите Enter для завершения программы');
            process.stdin.on('data', process.exit.bind(process, 0));
        });
    });
}

// Вызов функции с указанием пути к файлу
reverseFile('\\da.txt');
