const express = require ('express');
const path = require ('path');

const app = express();
const port = process.env.PORT || 3000;
const root = './';


app.use(express.static(path.join(root, 'dist')));
app.get('*',(req, res) =>{
  res.send({'nome':'Carlos', 'sobrenome':'souza'});
});

app.listen(port, () =>{
  console.log('Servidor Inicializado!');
})

