const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan');
const notes = [
  'http is a protocol',
  'http requests have a url, method, header, and body',
  'this is the notes array'
];


app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.set('view engine', 'ejs');


app.get('/',(req,res) =>{
  res.render('notes',{notes:notes});
});

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
res.status(404).send('NOT FOUND ALL CAPS');
  }
  
});

//respond to PUT requests
app.put('/notes/:putID', (req,res) =>{  
if(req.params.putID <notes.length){
  notes[req.params.putID] = req.body.note;
  res.send('changed the note');
  }
else{
res.status(404).send('404');
  }
  
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))
































