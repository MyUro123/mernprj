const express=require("express");
const session=require("express-session");
const bodyParser=require("body-parser");
const cors=require("cors");
const catRoutes=require("./routes/cat");
const subcatRoutes=require("./routes/subcat");
const itemRoutes=require("./routes/item");
const userRoutes=require("./routes/user");
const LoginRoutes=require("./routes/login");
const ChangePasswordRoutes=require("./routes/changepassword");
const ItemListRoutes=require("./routes/itemlist");



const app=express();

app.use(cors({
  origin:["http://localhost:3000", "http://localhost:3001"],
  credentials:true
}));

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use(session({
  secret:"uroproject",
  resave:false,
  saveUninitialized:false
}));

app.set("view engine","ejs");

app.use("/api", catRoutes);
app.use("/api", subcatRoutes);
app.use("/api", catRoutes);
app.use("/api", itemRoutes);
app.use("/api", userRoutes);
app.use("/api", require("./routes/login"));
app.use("/api", require("./routes/changepassword"));
app.use("/api", ItemListRoutes);
app.get("/", (req,res) => {
  res.render("home");
});

app.listen(5000, () => {
  console.log("Running");
});
