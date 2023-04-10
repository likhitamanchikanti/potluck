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
  con.query("SELECT * FROM Recipes", function(err,result){
    if(err){
      throw err;
    } 

    else{
      console.log(result);
      res.send(result)
    }
    
  });

})

app.post('/', express.json(), (req,res)=>{
//var records = [[req.body.recipeTitle,req.body.cookTime]];
var records = [[req.body.recipeTitle,req.body.userID, req.body.cookTime,req.body.recipeDescriptoin,req.body.prepTime,req.body.cookTime,req.body.diet,req.body.ingredients,req.body.steps,req.body.image,req.body.numLikes]];

if(records[0][0]!=null)
{
  con.query("INSERT into Recipes (RecipeTitle,UserID,RecipeDescription,Preptime,Cooktime,Diet,Ingredients,Steps,Image,NumLikes) VALUES ?",[records],function(err,res,fields){
    if(err) throw err;
    console.log(res);
  });
}

})

app.listen(8080,()=>{
  console.log("Port 8080");
})