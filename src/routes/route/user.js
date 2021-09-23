const app = require('../server/app');
const usuario = require('../../entities/users/users');
const { validationResult } = require('express-validator');
const {validCreateUser,validIdParams} = require('./valid/RouterValidate');

app.get('/user', async(req,res)=>{
    try{
        const todosUsers = await usuario.pegarTodosUsers();
        res.status(200).json(todosUsers);
    }catch(e){
        res.status(500).json(e.message);
    }
});

app.get('/user/:id',validIdParams, async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const getUsuarios = await usuario.pegarUmUsers(req.params)
        res.status(200).json(getUsuarios);
    }catch(e){
        return res.status(500).json(e.message);
    }
});

app.post('/user',validCreateUser,async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const createUser = await usuario.criarUsers(req.body);
        res.status(200).json(createUser);
    }catch(e){
        res.status(500).json(e.message);
    }
});

app.put('/user/:id', validIdParams,async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const atualizarUser = await usuario.atualizarUsers(req.params,req.body);
        res.status(200).json(atualizarUser);
    }catch(e){
        res.status(500).json(e.message);
    }
});
app.delete('/user/:id', validIdParams, async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        const deleteUser = await usuario.deletarUsers(req.params);
        res.status(200).json({"User": deleteUser, "Delete": "true"})
    }catch(e){
        res.status(500).json(e.message);
    }
});


module.exports = app;