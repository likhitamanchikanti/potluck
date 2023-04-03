const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "", // ip address of server running mysql
  user: "", // user name to your mysql database
  password: "", // corresponding password
  database: "" // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  console.log('connection successful');
});


app.get('/',(req,res)=>{
  res.json('OK');
})

app.post('/', express.json(), (req,res)=>{
var records = [[req.body.recipeTitle,req.body.cookTime]];

if(records[0][0]!=null)
{
  con.query("INSERT into recipe (title,cooktime) VALUES ?",[records],function(err,res,fields){
    if(err) throw err;
    console.log(res);
  });
}

})

app.listen(8080,()=>{
  console.log("Port 8080");
})