const pool = require('./mysql');

const store = async (MARCA_74, MODELO_74, PRECIO_74, CANTIDAD_74) => {
    const contactos_clientes = 'INSERT INTO contactos_clientes (MARCA_74, MODELO_74, PRECIO_74, CANTIDAD_74) VALUES (?, ?, ?, ?)';
    try {
        const [result] = await pool.execute(contactos_clientes, [MARCA_74, MODELO_74, PRECIO_74, CANTIDAD_74]);
        return result;
    } catch (error) {
        console.error('Error al insertar vehiculo: ', error);
        throw error;
    }
}
const findAll = async () => {
    const contactos_clientes = 'SELECT * FROM contactos_clientes';
    try {
        const [rows] = await pool.execute(contactos_clientes);
        return rows;
    } catch (error) {
        console.error('Error al obtener vehiculos: ', error);
        throw error;
    }
}
module.exports = {
    store,
    findAll
}