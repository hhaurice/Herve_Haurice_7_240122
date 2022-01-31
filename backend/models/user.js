const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;


const User = sequelize.define('User', {
  // Model attributes are defined here
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
  }
});

User.sync().then(() => {
    console.log("Table and model syncded successfully")
}).catch((err) => {
    console.log("Error syncing the table")
})

