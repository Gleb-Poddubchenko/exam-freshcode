const { Offer, User } = require('../models');

module.exports.getPendingOffers = async (req, res) => {
  try {
    const offers = await Offer.findAll({
      where: {
        status: 'pending',
        moderated: false,
      },
      include: [{
        model: User,
        attributes: ['id', 'displayName', 'email']
      }]
    });

    res.json(offers);
  } catch (err) {
    console.error('Error getting pending offers:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports.moderateOffer = async (req, res) => {
  try {
    const { offerId, status } = req.body;

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const [updated] = await Offer.update(
      { status, moderated: true },
      { where: { id: offerId } }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Offer not found' });
    }

    res.json({ message: `Offer ${status}` });
  } catch (err) {
    console.error('Error moderating offer:', err);
    res.status(500).json({ message: 'Server error' });
  }
};