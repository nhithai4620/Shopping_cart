import express from 'express';
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});




var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "nhithai4620",
    insecureAuth : true,
    database: "shopping_cart"
});


var user = {
    account : "",
    password : "",
}


app.get('/api/products', (req,res) =>{
    var products = [];
    var sql = "select * from product";
    con.query(sql,function(err,results){
        if (err) throw err;
        products = results;
        res.send(products);
    });
    
})

app.post("/api/login", (req, res) => {
    var sql = 'SELECT * FROM customer WHERE ctm_account = ? AND ctm_password = ?';
    user = req.body;
    var values = [user.account, user.password];
    if (user.account === 'Admin' && user.password === '1111'){
        res.send(user.account);
        res.end();
    } else if (user.account && user.password){
        con.query(sql,values, function(error, results) {
            if (results.length > 0) {
                results[0].ctm_birth = results[0].ctm_birth.toISOString().slice(0,10);
                res.send(results[0]);
                
            } else if (results.length === 0) {
                res.send("False");
            }		
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }   
})



app.post("/api/signup", (req, res) => {
    var sql = 'insert into customer(ctm_name,ctm_sex,ctm_birth,ctm_point,ctm_account,ctm_password)  value(?,?,?,?,?,?);';
    var user = req.body;
    var values = [user.name, user.sex,user.birth,user.point,user.account,user.password];
    if (user){
        con.query(sql,values, function(error, results) {
            if (error)	{
                res.send('false');
                throw error;
            }
            else {
                res.send('success');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }   
})

app.post("/api/changeinfor", (req, res) => {
    var sql = 'update customer set ctm_name=?,ctm_sex=?,ctm_birth=?,ctm_point=?,ctm_account=?,ctm_password=? where ctm_id=?';
    var user = req.body;
    var values = [user.name, user.sex,user.birth,user.point,user.account,user.password,user.id];
    if (user){
        con.query(sql,values, function(error, results) {
            if (error)	{
                res.send('false');
                throw error;
            }
            else {
                res.send('success');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
})


app.listen(5000,function(){
    console.log('Node server runing @http://localhost:5000');
})





// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
// app.use(express.static(path.join(__dirname,'build')));

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });




// app.delete('/login', function(req, res) {
//     console.log(util.inspect(req.body)); //outputs {}
// });







