'use strict';

const fs = require('fs');

// ������� ��� ������ ����� � ������ ��� � �������� �������
function reverseFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('������ ��� ������ �����:', err);
            return;
        }

        const reversedData = data.split('').reverse().join('');

        fs.writeFile(filePath, reversedData, (err) => {
            if (err) {
                console.error('������ ��� ������ �����:', err);
                return;
            }
            console.log('���� ������� ����������� � �������� �������.');

            // ��� ��������� ������� �� ��������
            process.stdin.resume();
            console.log('������� Enter ��� ���������� ���������');
            process.stdin.on('data', process.exit.bind(process, 0));
        });
    });
}

// ����� ������� � ��������� ���� � �����
reverseFile('\\da.txt');
