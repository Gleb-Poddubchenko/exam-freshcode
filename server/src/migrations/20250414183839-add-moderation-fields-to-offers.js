'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
   
    await queryInterface.sequelize.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_Offers_status') THEN
          CREATE TYPE "enum_Offers_status" AS ENUM ('pending', 'approved', 'rejected');
        END IF;
      END$$;
    `);

    
    await queryInterface.addColumn('Offers', 'status', {
      type: Sequelize.ENUM('pending', 'approved', 'rejected'),
      allowNull: false,
      defaultValue: 'pending',
    });

   
    await queryInterface.addColumn('Offers', 'moderated', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('Offers', 'status');
    await queryInterface.removeColumn('Offers', 'moderated');

    
    await queryInterface.sequelize.query(`DROP TYPE IF EXISTS "enum_Offers_status";`);
  },
};