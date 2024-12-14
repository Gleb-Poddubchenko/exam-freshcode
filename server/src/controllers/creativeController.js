const { Users } = require('../models');


const payTopCreatives = async (req, res) => {
  try {
   
    const topCreatives = await Users.findAll({
      where: { role: 'creator' },
      order: [['rating', 'DESC']],
      limit: 3,
    });

 
    for (const creative of topCreatives) {
      const newBalance = parseFloat(creative.balance) + 10;
      await creative.update({ balance: newBalance });
    }

    
    res.status(200).send('Top 3 creatives have been rewarded successfully.');
  } catch (error) {
    console.error('Error in rewarding top creatives:', error);
    res.status(500).send('Error occurred while rewarding creatives.');
  }
};

module.exports = {
  payTopCreatives,
};
