import typeorm from 'typeorm';
import Question from '../models/Question.mjs';

export default new typeorm.EntitySchema({
  name: 'Question',
  target: Question,
  columns: {
    _id: {
      type: 'string',
      primary: true,
      generated: true,
    },
    text: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    createdAt: {
      type: 'string',
    },
    like: {
      type: 'string',
    },
    answers: {
      type: 'json',
    },
    to: {
      type: 'string',
    },
  },
});
