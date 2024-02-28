import express from 'express'
const app =express();
const port = process.env.PORT || '8080'
import web from './routes/web.js'


app.use('/',web)

// serv static files 
app.use(express.static('public'))

app.set('view engine','ejs')

app.listen(port ,()=> {
    console.log(`server listening at http://localhost:${port}`);
});