const path = require('path');
const db = require(path.join(__dirname, '..', 'src', 'models'));

async function testPostgres() {
  try {
    const conversation = await db.Conversation.create({
      participant1: 1,
      participant2: 2,
      blackList1: false,
      blackList2: false,
      favoriteList1: true,
      favoriteList2: false
    });

    console.log('Создана переписка:', conversation.dataValues);

    const message = await db.Message.create({
      sender: 1,
      body: 'Привет! Это тестовое сообщение',
      conversation_id: conversation.id
    });

    console.log('Создано сообщение:', message.dataValues);
  } catch (err) {
    console.error('Ошибка:', err);
  }
}

testPostgres();