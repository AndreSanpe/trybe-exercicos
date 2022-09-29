'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('Books', { 
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      paeQuality: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
      }


    });
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.dropTable('Books');
     
  }
};
