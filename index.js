import express from "express";
const books=[
{
id: 1,
name: "JS Programming",
price: 120
},
{
id: 2,
name: "JAVA Programming",
price: 130
},
{
id: 3,
name: "BIG DATA",
price: 80
},
{
id: 4,
name: "BLOCKCHAIN",
price: 140
}];
const app=express();
app.use(express.json());

app.get("/",(req,res)=>(
res.send("Hello World")
));
app.get("/about",(req,res)=>(
res.send("Hello World")
));
app.get("/books",(req,res)=>{
 res.json(books);
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
app.post("/books",(req,res)=>{
    const book=req.body;
     book.id=books[books.length-1].id+1;
    books.push(book);
    res.status(201).json("livre bien ajouter")
})
app.put("/books/:id",(req,res)=>{
    const id=req.params.id;
    const bookIndex=books.findIndex(b=>b.id==id);       
    if(bookIndex!==-1){
        books[bookIndex]=req.body;
        res.json("livre bien modifier");
    }else{
        res.status(404).json("livre introuvable !!")
    }
});
app.delete("/books/:id",(req,res)=>{
    const id=req.params.id;
    const bookIndex=books.findIndex(b=>b.id==id);
    if(bookIndex!==-1){
        books.splice(bookIndex,1);
        res.json("livre bien supprimer");
    }else{
        res.status(404).json("livre introuvable !!")
    }
});
app.listen(3000,()=>console.log("Server is running on port 3000"));