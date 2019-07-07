const Person = require('../models/person');
const { createDocument, getDocument } = require('../utils/database');

module.exports = {
  Query: {
    getPerson: async (_, { input: { _id } }) => getDocument(Person, _id),
  },
  Mutation: {
    createPerson: async (_, { input }) => {
      return createDocument(Person, input);
    },
  },
};
