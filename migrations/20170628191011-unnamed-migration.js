'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
  'Todos',
  'Assignee',
  {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "me"
  }
)

  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
  'Todos',
  'Assignee'
)
  
  }
};
