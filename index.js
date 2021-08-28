const express=require('express');
const exphbs=require('express-handlebars');
const path=require('path');
const app=express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','handlebars');
app.engine('handlebars',exphbs());

app.get('/',(req,res)=>{
    res.render('index');
})
app.post('/search',(req,res)=>{
    let q=req.body.query;
    res.render('search',{
        flag:true,
        query:q
    });
})
app.get('/more/:slug',(req,res)=>{
    let slug=req.params.slug;
    slug=slug.split('-');
    query=slug[0];
    from=slug[1];
    to=slug[2];
    n=slug[3];
    res.render('more',{
        query:query,
        from:from,
        to:to,
        n:n
    })
})

app.listen(port,()=>{
    console.log('Listening..');
})