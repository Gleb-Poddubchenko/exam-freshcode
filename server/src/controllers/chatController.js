const {
  Conversation,
  Message,
  Catalog,
  CatalogConversations,
  User,
  Sequelize,
} = require('../models');

const { Op } = Sequelize;


module.exports.addMessage = async (req, res, next) => {
  try {
    const message = await Message.create({
      sender: req.tokenData.userId,
      body: req.body.body,
      conversation_id: req.body.conversationId,
    });
    res.status(201).send(message);
  } catch (err) {
    next(err);
  }
};


module.exports.getChat = async (req, res, next) => {
  try {
    const messages = await Message.findAll({
      where: { conversation_id: req.params.chatId },
      include: [
        {
          model: User,
          as: 'Sender',
          attributes: ['id', 'firstName', 'lastName', 'displayName', 'avatar'],
        },
      ],
      order: [['createdAt', 'ASC']],
    });
    res.send(messages);
  } catch (err) {
    next(err);
  }
};


module.exports.getPreview = async (req, res, next) => {
  try {
    const userId = req.tokenData.userId;
    const conversations = await Conversation.findAll({
      where: {
        [Op.or]: [
          { participant1: userId },
          { participant2: userId },
        ],
      },
      include: [
        {
          model: Message,
          limit: 1,
          order: [['createdAt', 'DESC']],
        },
      ],
    });
    res.send(conversations);
  } catch (err) {
    next(err);
  }
};


module.exports.createCatalog = async (req, res, next) => {
  try {
    const catalog = await Catalog.create({
      userId: req.tokenData.userId,
      catalogName: req.body.catalogName,
    });
    res.send(catalog);
  } catch (err) {
    next(err);
  }
};


module.exports.updateNameCatalog = async (req, res, next) => {
  try {
    const updated = await Catalog.update(
      { catalogName: req.body.catalogName },
      {
        where: {
          id: req.body.catalogId,
          userId: req.tokenData.userId,
        },
      }
    );
    res.send({ message: 'Catalog name updated', updated });
  } catch (err) {
    next(err);
  }
};

// Добавить чат в каталог
module.exports.addNewChatToCatalog = async (req, res, next) => {
  try {
    await CatalogConversations.create({
      catalogId: req.body.catalogId,
      conversationId: req.body.chatId,
    });
    res.status(201).send({ message: 'Chat added to catalog' });
  } catch (err) {
    next(err);
  }
};

// Удалить чат из каталога
module.exports.removeChatFromCatalog = async (req, res, next) => {
  try {
    await CatalogConversations.destroy({
      where: {
        catalogId: req.body.catalogId,
        conversationId: req.body.chatId,
      },
    });
    res.send({ message: 'Chat removed from catalog' });
  } catch (err) {
    next(err);
  }
};

// Удалить каталог
module.exports.deleteCatalog = async (req, res, next) => {
  try {
    await Catalog.destroy({
      where: {
        id: req.body.catalogId,
        userId: req.tokenData.userId,
      },
    });
    res.send({ message: 'Catalog deleted' });
  } catch (err) {
    next(err);
  }
};


module.exports.getCatalogs = async (req, res, next) => {
  try {
    const catalogs = await Catalog.findAll({
      where: { userId: req.tokenData.userId },
      include: [
        {
          model: Conversation,
          through: { attributes: [] },
        },
      ],
    });
    res.send(catalogs);
  } catch (err) {
    next(err);
  }
};


module.exports.blackList = async (req, res, next) => {
  try {
    const userId = req.tokenData.userId;
    const conversation = await Conversation.findByPk(req.body.conversationId);

    if (!conversation) return res.status(404).send({ error: 'Conversation not found' });

    const isFirst = conversation.participant1 === userId;
    const field = isFirst ? 'blackList1' : 'blackList2';

    conversation[field] = req.body.isInBlackList;
    await conversation.save();

    res.send({ message: 'Blacklist updated' });
  } catch (err) {
    next(err);
  }
};


module.exports.favoriteChat = async (req, res, next) => {
  try {
    const userId = req.tokenData.userId;
    const conversation = await Conversation.findByPk(req.body.conversationId);

    if (!conversation) return res.status(404).send({ error: 'Conversation not found' });

    const isFirst = conversation.participant1 === userId;
    const field = isFirst ? 'favoriteList1' : 'favoriteList2';

    conversation[field] = req.body.isFavorite;
    await conversation.save();

    res.send({ message: 'Favorite status updated' });
  } catch (err) {
    next(err);
  }
};