var express = require('express');
var mysql = require('mysql');

var connect = mysql.createConnection({
    //properties..
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'sampleDB'
});

connection.connect(function(error){
    if(!!error) {
        console.log('error');
    }else{
        console.log('connected');
    }
});

app.get('/',function(req,res){
    //about mysql
    connection.query("SELECT * FROM sample DB", function (error,rows,fields){
        if(!!error){
            console.log('error in the query');
        }else{
            console.log('successful');
            resp.send('hello,' +rows[0].Name);
        }
    });
})
app.listen(8080);