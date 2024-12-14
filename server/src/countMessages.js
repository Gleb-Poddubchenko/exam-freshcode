const mongoose = require('mongoose');
const Message = require('./models/mongoModels/Message');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://mongo:27017/your_database',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Успешное подключение к базе данных');
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error);
  }
};

const countMessagesWithKeyword = async () => {
  try {
    const keyword = 'паровоз';
    const query = { body: { $regex: keyword, $options: 'i' } };
    const count = await Message.countDocuments(query);
    console.log(
      `Количество сообщений с ключевым словом "${keyword}": ${count}`
    );
  } catch (error) {
    console.error('Ошибка при подсчете сообщений:', error);
  }
};

(async () => {
  await connectToDatabase();
  await countMessagesWithKeyword();
  mongoose.disconnect();
})();
