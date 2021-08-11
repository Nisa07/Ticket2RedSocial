module.exports = (sequelize, type) =>{// recibe el nombre de la tabla
    return sequelize.define('usuario',{
        id:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        password:  type.STRING,
        email: type.STRING


    }); 
}