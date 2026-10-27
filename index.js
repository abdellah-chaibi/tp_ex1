import express from "express";
const books=[
    {id:1,title:"Book 1",author:"Author 1"},
    {id:2,title:"Book 2",author:"Author 2"},]
const app=express();

app.get("/",(req,res)=>(
res.send("Hello World")
));
app.get("/about",(req,res)=>(
res.send("Hello World")
));
app.get("/books",(req,res)=>{
 res.status(200).json(books);
});

app.get("/books/:id",(req,res)=>{
    const id = req.params.id;

    const book=books.find(b=>b.id==id);
    if(book){
        res.json(book);
    }else{
        res.status(404).json("livre introuvable !!")
    }
});

app.listen(3000,()=>console.log("Server is running on port 3000"));