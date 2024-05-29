const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// ใช้ body-parser เพื่ออ่านค่าจากฟอร์ม
app.use(bodyParser.urlencoded({ extended: true }));

// รับข้อมูลจากฟอร์มและบันทึกลงใน logs.txt
app.post('/submit', (req, res) => {
    const text = req.body.textInput;
    fs.appendFile('logs.txt', text + '\n', (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// ให้บริการ logs.txt
app.get('/logs', (req, res) => {
    fs.readFile('logs.txt', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
