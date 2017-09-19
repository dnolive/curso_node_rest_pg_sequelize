export default function (sequelize, DataTypes) {

   const User = sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      nome: {
         type: DataTypes.STRING,
         allowNull: false,
         validade: {
            notEmpty: true
         }
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validade: {
            notEmpty: true
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validade: {
            notEmpty: true
         }
      },
   });

   return User;
}
