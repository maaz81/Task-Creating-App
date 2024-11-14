const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))


app.get('/', function (req, res) {
    fs.readdir('./files', function (err, files) {
        res.render('index', { files: files })
    })
});

// app.post('/create', function (req, res) {
//     const fileName = req.body.title.split(' ').join('').txt;
//     const filePath = path.join(__dirname, 'files', fileName);

//     fs.writeFile(filePath, req.body.details, function (err) {
//         if (err) {
//             console.error('Error writing file:', err);
//             res.status(500).send('Error writing file');
//             return;
//         }
//         res.send('File created successfully');
//         res.redirect('/')
//     });
// });

app.post('/create', function (req, res) {
    const title = req.body.title.split(' ').join('');
    const fileName = './files/'+title+'.txt';
    const pa = req.body.body;
    fs.writeFile(fileName, pa, function(err){
        if(err) throw err
        res.redirect('/')
    });
}); 







app.listen(3000)


