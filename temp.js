
const express = require('express');
const app = express();
const mysql1= require('mysql2');



app.use(express.static('abc'));



app.get('getbookdetails', function (req, res) =>{
    
	
        console.log("ajax called ");
const database={
		host: 'localhost',
    user: 'root',
    password: 'CDAC',
    database: 'wpt',
	port:3306
}
    const connection=mysql.createConnection(database);
let output={
bookfoundstatus :false,;
bookdetails:{bookid:1,bookname:'java',price:200}
};
let bookid=req.query.bookid;
connection.query('select bookid',bookname,price from books where bookid=?',[bookid],(error,rows)=>{
if(error){
	console.log(error);
}
else{

	if(rows.length>0){
output.bookfoundstatus=true;
output.bookdetails=rows[0];
	}else{
console.log("no data found");

	}
}
res.send(output);



	});
});

app.get('/updatebook',(req, res) =>{
    
	
	console.log("ajax called ");
const database={
	host: 'localhost',
user: 'root',
password: 'CDAC',
database: 'wpt',
port:3306
}
const connection=mysql.createConnection(database);
let output={
bookfoundstatus :false,};
bookdetails:{bookid:1,bookname:'java',price:200}
};
let bookid=req.query.bookid;
let price =req.query.price;
connection.query('update books set price =?where bookid=?',bookid=?',[price,bookid],(error,res)=>{
if(error){
console.log(error);
}
else{

if(rows.length>0){
output.bookfoundstatus=true;

}else{
console.log("no update");

}
}
res.send(output);



});
});
app.listen(3000);


