const express = require ('express');
const path = require ('path');

const app = express();


app.use (express.static(__dirname+'/dist/DKMAF'));

app.get('/*',(req,res)=> res.sendFile(path.join(__dirname+'/dist/DKMAF/index.html')),


);
app.listen(process.env.PORT || 3000);