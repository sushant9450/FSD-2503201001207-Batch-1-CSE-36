const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id:1, name: 'John' }];

// GET
app.get('/users', (req, res) =>{
res.json(users);

});

// POST
app.post('/users', (req, res) =>{
users.push(req.body);
res.send('User added');

});

//PUT
app.put('/users/:id', (req, res) =>{
const id = parseInt(req.params.id);
const user = users.find(u => u.id === id);
user.name = req.body.name;
res.send('User updated');

});

// DELETE
app.delete('/users/:id', (req, res) =>{
const id = parseInt(req.params.id);
users = users.filter(u => u.id !== id);
res.send('User deleted');
});

app.listen(2000,()=>console.log("server is running 2000"))