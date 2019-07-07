const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = {
  connectToDB: async () => {
    const uri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
    mongoose
      .connect(uri, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        dbName: 'interview-db',
      })
      .then(() => logger.info(`🎯  Connected to database at ${uri}`));

    mongoose.set('debug', !process.env.APP_ENV);
  },

  getDocument: async (Document, _id) => {
    return Document.findOne({ _id }).lean();
  },
  createDocument: async (Document, input) => {
    return new Document(input).save();
  }
};
