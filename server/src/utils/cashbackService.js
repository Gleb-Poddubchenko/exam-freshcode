const { User, Offer } = require('../models'); 
const { Op } = require('sequelize'); 


async function addCashback() {
  const startDate = new Date('2023-12-25'); 
  const endDate = new Date('2024-01-10');   

  
  const customers = await User.findAll({ where: { role: 'customer' } });

  for (const customer of customers) {
    
    const offers = await Offer.findAll({
      where: {
        userId: customer.id,
        createdAt: { [Op.between]: [startDate, endDate] },
      },
    });

    
    const cashback = offers.reduce((total, offer) => total + (offer.price * 0.1), 0);

    
    await customer.update({ balance: customer.balance + cashback });
  }
}

module.exports = { addCashback };