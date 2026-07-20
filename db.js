const mysql=require("mysql2");

const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"Umesh123@",
database:"merndb"
});

db.connect((err)=>{
if (err) {
  console.error("MYSQL Connection Error:", err.message);
  return;
}
console.log("MYSQL Connected");
 });

module.exports=db;
