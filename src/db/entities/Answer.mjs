import typeorm from 'typeorm';
import Answer from '../models/Answer.mjs';

export default new typeorm.EntitySchema({
  name: 'Answer',
  target: Answer,
  columns: {
    _id: {
      type: 'string',
      primary: true,
      generated: true,
    },
    text: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    role: {
      type: 'string',
    },
    createdAt: {
      type: 'string',
    },
    like: {
      type: 'string',
    },
    questionId: {
      type: 'string',
    },
  },
});
