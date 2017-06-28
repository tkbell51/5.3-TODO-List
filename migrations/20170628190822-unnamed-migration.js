'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Todos',
      'Assignee',
      Sequelize.STRING
    );

  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Todos', 'Assignee');

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
