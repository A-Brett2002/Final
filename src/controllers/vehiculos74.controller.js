const model = require('../models/vehiculos74');

const create =(req,res)=>{
    res.render('vehiculos74/create');
}
const store = async (req,res)=>{
    const {MARCA_74, MODELO_74, PRECIO_74, CANTIDAD_74} = req.body;   
    try{
        const result = await model.store(MARCA_74, MODELO_74, PRECIO_74, CANTIDAD_74);
        res.render('/vehiculos74/create', {message: 'Vehiculo creado correctamente',vehiculo_74Id: result.insertId + 1});
    }catch(error){
        console.log(error);
        res.render('/vehiculos74/create', {message: 'Error al crear vehiculo',vehiculo_74Id: null});
    }
}
const index = async (req,res)=>{
    try{
        const result = await model.findAll();
        res.render('vehiculos74/index', {vehiculos_74: result});
    }catch(error){
        console.log(error);
        res.render('vehiculos74/index', {vehiculos_74: []});
    }
}
const show = (req,res)=>{
    res.render('vehiculos74/show');
}
const edit = (req,res)=>{
    res.render('vehiculos74/edit');
}
const update = (req,res)=>{
    res.render('vehiculos74/update');
}
const destroy = (req,res)=>{
    res.render('vehiculos74/destroy');
}
module.exports = {
    create,
    store,
    index,
    show,
    edit,
    update,
    destroy
}