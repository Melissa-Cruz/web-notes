const morgan = require('morgan');


const notes = [
  'http is a protocol',
  'http requests have a url, method, header, and body',
  'this is the notes array'
];

const express = require('express')
const app = express()
app.use(morgan('tiny'));
//app.get('/', (req, res) => res.send('Web Notes'))
//app.use('/', express.static('views'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));

app.get('/',(req,res) =>{
  res.render('notes',{notes:notes});
});


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/notes', (req, res) => { 
  notes.push(req.body.note);
  res.redirect('/');
});


//curl command
app.delete('/notes/:notesID', (req,res) =>{
  
if(req.params.notesID <notes.length){
  notes.splice(req.params.notesID,1);
  res.send('deleted fancy');
  }
  
else{
res.status(404).send('not found');
  }
  
});

