const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "potluckdatabase.cnwv3cy956yw.us-east-1.rds.amazonaws.com", // ip address of server running mysql
  user: "admin", // user name to your mysql database
  password: "potluck123", // corresponding password
  database: "potluckdatabase" // use the specified database
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

app.post('/submit', express.json(), (req,res)=>{
var records = [[req.body.userID,req.body.recipeTitle,req.body.recipeDescription,req.body.prepTime,req.body.cookTime,req.body.diet,req.body.ingredients,req.body.steps,req.body.imageLink,req.body.numLikes,req.body.liked]];

console.log(records)
if(records[0][0]!=null)
{
  con.query("INSERT into Recipes (UserID,RecipeTitle,RecipeDescription,PrepTime,CookTime,Diet,Ingredients,Steps,Image,NumLikes,Liked) VALUES ?",[records],function(err,res,fields){
    if(err) throw err;
    console.log(res);
  });
}

})

//"UPDATE Recipes SET NumLikes = NumLikes + 1 WHERE RecipeTitle = ? AND UserID = ?"
app.post('/likes', express.json(), (req, res) => {
  const recipeTitle = req.body.recipeTitle;
  const userID = req.body.userID;
  con.query(
    "UPDATE Recipes SET NumLikes = NumLikes + 1, Liked = true WHERE RecipeTitle = ? AND UserID = ?",
    [recipeTitle, userID],
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    }
  );
});
  

app.listen(8080,()=>{
  console.log("Port 8080");
})